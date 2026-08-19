(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  requestAnimationFrame(function () { document.body.classList.add('loaded'); });

  // Mobile menu
  var burger = document.getElementById('menuBtn'), nav = document.getElementById('hdr');
  if (burger && nav) burger.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });

  // Header: gain surface on scroll, hide on scroll-down
  var hdr = document.getElementById('hdr'), last = 0;
  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    document.body.classList.toggle('scrolled', y > 10);
    if (!nav.classList.contains('open')) {
      if (y > last && y > 560) hdr.style.transform = 'translateY(-135%)';
      else hdr.style.transform = 'none';
    }
    last = y;
  }, { passive: true });

  // Scroll reveal (auto-tag inner-page elements, then observe everything)
  if (!reduce && 'IntersectionObserver' in window) {
    var auto = document.querySelectorAll(
      '.pagehead > .wrap > *, section > .wrap > .eyebrow, section > .wrap > h2, ' +
      '.card, .stat, .cs-item, .plan, .note, .split > *, form.lead, table.spec, ' +
      '.prose > h2, .prose > h3, .prose > p, .prose > ul, .prose > blockquote, details.faq');
    Array.prototype.forEach.call(auto, function (el) {
      if (!el.classList.contains('rv') && !el.classList.contains('rv-clip')) el.classList.add('rv');
    });
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -7% 0px', threshold: 0.1 });
    var revealables = document.querySelectorAll('.rv, .rv-clip');
    document.querySelectorAll('.rv, .rv-clip').forEach(function (el) {
      var sibs = el.parentElement ? [].slice.call(el.parentElement.children)
        .filter(function (c) { return c.classList.contains('rv') || c.classList.contains('rv-clip'); }) : [];
      el.style.transitionDelay = (Math.min(sibs.indexOf(el), 6) * 65) + 'ms';
      io.observe(el);
    });
    // Safety net: IntersectionObserver can occasionally miss a target (browser
    // quirks, extensions, very large scroll jumps). Never let real content stay
    // permanently invisible — sweep on scroll/resize and reveal anything that is
    // visibly on screen but was never flagged "in".
    var sweep = function () {
      var vh = window.innerHeight;
      revealables.forEach(function (el) {
        if (el.classList.contains('in')) return;
        var r = el.getBoundingClientRect();
        if (r.bottom > 0 && r.top < vh * 0.93) { el.classList.add('in'); io.unobserve(el); }
      });
    };
    var sweepPending = false;
    var scheduleSweep = function () {
      if (sweepPending) return;
      sweepPending = true;
      requestAnimationFrame(function () { sweepPending = false; sweep(); });
    };
    window.addEventListener('scroll', scheduleSweep, { passive: true });
    window.addEventListener('resize', scheduleSweep);
    setTimeout(sweep, 400);
  } else {
    document.querySelectorAll('.rv, .rv-clip').forEach(function (el) { el.classList.add('in'); });
  }

  // Count-up numbers
  function animate(el) {
    var to = parseFloat(el.dataset.count), dec = parseInt(el.dataset.dec || '0'),
        pre = el.dataset.prefix || '', suf = el.dataset.suffix || '', t0 = null, dur = 1600;
    function step(ts) {
      if (!t0) t0 = ts; var p = Math.min((ts - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      var v = (to * e).toFixed(dec); if (dec === 0) v = Math.round(to * e).toLocaleString();
      el.textContent = pre + v + suf; if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var numEls = document.querySelectorAll('[data-count]');
  if (numEls.length) {
    var nio = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        if (reduce) {
          var d = parseInt(el.dataset.dec || '0');
          el.textContent = (el.dataset.prefix || '') +
            (d ? parseFloat(el.dataset.count).toFixed(d) : Math.round(el.dataset.count).toLocaleString()) +
            (el.dataset.suffix || '');
        } else animate(el);
        nio.unobserve(el);
      });
    }, { threshold: 0.6 });
    numEls.forEach(function (el) { nio.observe(el); });
  }

  // Case-study showcase (home only)
  var focus = document.getElementById('focus'), clist = document.getElementById('clist');
  if (focus && clist) {
    var set = function (k) {
      clist.querySelectorAll('.ci').forEach(function (r) { r.classList.toggle('act', r.dataset.k === k); });
      focus.querySelectorAll('.fc').forEach(function (f) { f.classList.toggle('on', f.dataset.k === k); });
    };
    clist.querySelectorAll('.ci').forEach(function (row) {
      row.addEventListener('mouseenter', function () { set(row.dataset.k); });
      row.addEventListener('click', function () { set(row.dataset.k); });
    });
  }

  // Click-to-play YouTube facade (loads the real embed only on interaction)
  document.querySelectorAll('.yt-facade').forEach(function (el) {
    var play = function () {
      var id = el.dataset.video, title = el.dataset.title || 'Video';
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1';
      iframe.title = title;
      iframe.setAttribute('allow', 'autoplay; encrypted-media; fullscreen');
      iframe.allowFullscreen = true;
      iframe.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;border:0';
      el.innerHTML = '';
      el.appendChild(iframe);
    };
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.addEventListener('click', play);
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); play(); }
    });
  });

  // Custom cursor + magnetic buttons (fine pointer only)
  var cur = document.getElementById('cursor');
  if (cur && window.matchMedia('(hover:hover) and (pointer:fine)').matches && !reduce) {
    var cx = innerWidth / 2, cy = innerHeight / 2, tx = cx, ty = cy;
    addEventListener('mousemove', function (e) { tx = e.clientX; ty = e.clientY; });
    (function loop() { cx += (tx - cx) * .18; cy += (ty - cy) * .18;
      cur.style.transform = 'translate(' + cx + 'px,' + cy + 'px) translate(-50%,-50%)';
      requestAnimationFrame(loop); })();
    document.querySelectorAll('a, button, .ci, .srow').forEach(function (el) {
      el.addEventListener('mouseenter', function () { cur.classList.add('big'); });
      el.addEventListener('mouseleave', function () { cur.classList.remove('big'); });
    });
    document.querySelectorAll('.btn, .ncta').forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        el.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * .16) + 'px,' +
          ((e.clientY - r.top - r.height / 2) * .28) + 'px)';
      });
      el.addEventListener('mouseleave', function () { el.style.transform = ''; });
    });
  }
})();
