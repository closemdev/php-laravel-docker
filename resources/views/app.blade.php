<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full ">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="app-name" content="{{ config('app.name', 'Promp.ly') }}">

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#783ec9">
    <meta name="msapplication-TileColor" content="#603cba">
    <meta name="theme-color" content="#ffffff">

    <title inertia>{{ config('app.name', 'Promp.ly') }}</title>

    <!-- Scripts -->
    @routes
    {{
      Vite::useBuildDirectory('dist')
        ->withEntryPoints([
          'resources/app/main.ts',
          'resources/assets/styles/tailwind.scss',
          'resources/assets/styles/app.scss'
        ])
    }}
    @inertiaHead

    <!-- Intercom -->
    <script>
      window.intercomSettings = {
        api_base: "https://api-iam.intercom.io",
        app_id: "pj6zxb5j"
      };
    </script>

    <script>
    (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/pj6zxb5j';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
    </script>

    <!-- Loading -->
    <style>
      #preload{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);}
      #preload::after{content:'';width:200px;height:200px;position:absolute;top:-100px;left:-100px;border-radius:50%;box-sizing:border-box;border:7px solid rgba(255,255,255,0.3);border-top-color:#362063;animation:spin 1s infinite linear;}
      #preload::before{content:'';width:200px;height:200px;position:absolute;top:-100px;left:-100px;border-radius:50%;background:url('/icon.svg');}
      #preload span{width:200px;position:absolute;left:-100px;bottom:-155px;text-align:center;color:#000;font-family:Arial, Helvetica, sans-serif;font-weight:bold;}
      @keyframes spin {100%{transform: rotate(360deg);}}
    </style>
    <script>
      window.addEventListener('load', () => {
        document.getElementById('preload').remove();
      })
    </script>
  </head>
  <body class="font-sans antialiased h-full">
    <noscript>
      <strong>We're sorry but {{ config('app.name', 'Promp.ly') }} doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="preload"><span>LOADING</span></div>
    @inertia
  </body>
</html>
