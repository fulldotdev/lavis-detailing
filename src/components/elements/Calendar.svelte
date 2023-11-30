<script>
  import { onMount } from 'svelte'

  export let callink

  onMount(() => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.innerHTML = `
        (function (C, A, L) {
          let p = function (a, ar) {
            a.q.push(ar);
          };
          let d = C.document;
          C.Cal = C.Cal || function () {
            let cal = C.Cal;
            let ar = arguments;
            if (!cal.loaded) {
              cal.ns = {};
              cal.q = cal.q || [];
              d.head.appendChild(d.createElement('script')).src = A;
              cal.loaded = true;
            }
            if (ar[0] === L) {
              const api = function () {
                p(api, arguments);
              };
              const namespace = ar[1];
              api.q = api.q || [];
              typeof namespace === 'string' 
                ? (cal.ns[namespace] = api) && p(api, ar)
                : p(cal, ar);
              return;
            }
            p(cal, ar);
          };
        })(window, 'https://app.cal.com/embed/embed.js', 'init');
        
        Cal('init', { origin: 'https://cal.com' });
        
        Cal('inline', {
          elementOrSelector: '#my-cal-inline',
          calLink: '${callink}',
          layout: 'month_view',
        });
  
        Cal('ui', {
          styles: { branding: { brandColor: 'var(--un-preset-radix-hue9)' } },
          hideEventTypeDetails: false,
          layout: 'month_view',
        });
      `
    // document.body.appendChild(script);
    document.querySelector('.binder').appendChild(script)
  })
</script>

<div
  style="width:100%;height:100%;overflow:scroll"
  id="my-cal-inline"
  class=""
/>
<div class="binder"></div>
