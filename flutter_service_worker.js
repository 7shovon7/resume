'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "04d34c5b3d1fa330dd8a51d72c18ab85",
"index.html": "85ba8008056d5a400fcc558746449af1",
"/": "85ba8008056d5a400fcc558746449af1",
"main.dart.js": "d3356cc4aa565a7a2d390134901e1614",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "1388e69d64222430c90b99841b235e10",
"icons/Icon-192.png": "3862fbd7e459e465abb21ed0e18f1e01",
"icons/Icon-maskable-192.png": "3862fbd7e459e465abb21ed0e18f1e01",
"icons/Icon-maskable-512.png": "1565fac61d898e85674490ae43b8d584",
"icons/Icon-512.png": "1565fac61d898e85674490ae43b8d584",
"manifest.json": "245f873d0d5b50278ee12c2c714060f3",
".git/ORIG_HEAD": "b68963f574504dd4439b330bb64ef0a8",
".git/config": "2410d9b12001f729efedb3298653f729",
".git/objects/0d/8b0174364887922d96ae95efabdd97dcb035d8": "558711fe26a21193cf8958c4b0f34493",
".git/objects/95/144daa2b0ad873db782f168f9dd70a7ef34be0": "58e8dfe23aa45f277e4494813af8dfd2",
".git/objects/59/1522d8e248c441419b72cbc48fe0a80060eaf8": "340ecaa8f68bf34a9d6d978e085fb454",
".git/objects/0c/f6c95a1e8ca1d98b56f3a63266f06007da1be9": "9e653f00b4be6153ca240e2004f7343f",
".git/objects/66/f079f25c8d98ca8b21d537ff18dc9cde13da36": "f24b07c629b5241be4fe45cd0959fa27",
".git/objects/68/f400f1a37297eeacc96e1fbeb37b118ec45a28": "6a847787bb61f9122de45063889b4ec0",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/04/c13e95c30bff4882613992c9d8aec712ba2976": "f0718e5f4cb72e9f072821967468cdc0",
".git/objects/04/4e036cbf24485b45ab34d51dd2ebf6eb58031e": "94d7165f6b989cf5917ffaca9d4c831d",
".git/objects/51/e2e87854fa5e7ea9a603d01c6416f4b7388a1d": "3412a6c8770eccf19d316f603082a222",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/34/9f6f95a0348528326a9b042faf613859f59824": "455142d2a379fc4f579d24b67f9bf2aa",
".git/objects/5f/f99a74f409779958b4a171f0609b6b814b2c8c": "49910e7bc1d9d3a098098aab3fb069ba",
".git/objects/33/d603560ceea09699884c344fea93bb5056fedb": "d8aec95c3dbe2e6c6ab148ef591c083c",
".git/objects/9d/a00e4674eb2799d0edd8c9fc790a8f489c9f36": "1c2a162daf0b93f088cc989a4226698b",
".git/objects/9c/b771ac68dbda96661ae259faeffe4b87fa8c00": "3acac6460b5eaa08f51c420358fc367e",
".git/objects/9c/27a962c5bb98b140617e1ae643f77f154bf4cd": "da43eca59cd2392ff11df4eaa3715987",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/601061e247ccb52ace9c77e50e530f3ec73a5e": "63a70f958d4eb1626b779aeeb20a7856",
".git/objects/d7/6aa05f45d594f62cd51895787a482d5ca74737": "7668e5076822f440b525e513c6236fd8",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/77dac1f75d202c6f27090cfd500448abb887a0": "f526e576e0c85dcaa338ba70abc6fcb8",
".git/objects/bd/a7ac5d1a0b46ef8e5ad7ffa67027847d8131af": "080019fe7e052a150a368d7fae78a94d",
".git/objects/d1/f94f56409c8d91c0fada935df98641621705d9": "d861b72f0e6cbedf58340ef680c26eb8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/eae2794b604cfaeec837331d5ff6bd162b5161": "03b6a3017b3a13367ab834c2e7dd13e1",
".git/objects/bc/627ac8733016f9b74d41ff7f000598c0a159e1": "4ab1184232cb2a8ef2371fd6f34feb1e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/abb7fd6ff3923a9c8ee10a6d6a13bfca8c7cb4": "c1e25f3904f831530caa27e83260c2cc",
".git/objects/c7/44a4275062e2e364645eb5f61d950862f9228e": "12ab9c49995f9ca59f108e498ffa9082",
".git/objects/c7/df2388faf0d922b29a76518c05741479d43d67": "2ec247c70fbef5a9aa019632fbb840fb",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e4/243c369c607d54e281fcbd6a64330928bc3d37": "909b11abca2d5a4143177af3e955a19a",
".git/objects/4e/0abe4fc7bff50d5539a47386d0e5c830a68972": "abc5ee9004c499f4ade2d6bb54b62c92",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/7d/4fa1a78843df773522f7f658ee07ad4ef605d9": "f42f2f16b1c1db19b83548fb77e71b39",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1f/b51c8f0158d0b676c2c6af82aa05f8142b9d10": "38c975eb25cdec61acabb50615a468be",
".git/objects/73/38c975c703194ce6def48a36b36425c28a4e8f": "98afe4a34ef8de9b3213ad27412ab570",
".git/objects/87/f9e8ecf2dbd89896a750b263f554d2d14123ea": "a94d5613efdd75ac846f5d66cf4dc33e",
".git/objects/74/336e10c3c04cca604c86b397b0d0566abdf454": "8d72553caf63d75a89fd77590a3d7bd8",
".git/objects/8f/3ee69ad8a31161b6bc28f61a1812477729c3c8": "de9ef261d01de9c4e182b4bc728fdb70",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/a12167d0d0fecd99d43febc11f8df80cebdc74": "a4ed0053af951c7023788f70c4a958d9",
".git/objects/4d/f0bd880e0027d0355fa8dca6c185a74293ce56": "4aaca9a545faeb6b888cb050c751ec4c",
".git/objects/81/fd8f437f9212f4e6676b20d9ae3d10d60a6714": "fd9b027070567aae31e80aa1080ebb07",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/31/8c736d6246314f4e04a2506f712ac63f251969": "c6908c70712f2215028b538e91755a53",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/06/493d572734e5537bd611425f3ebe4ad272923e": "55b8a30103d152fa9d26be00c8c6e3f2",
".git/objects/6c/158747ca493f41ccf7f5ce91eeedc640046724": "faa7ed6f732da625f74662d39350fb05",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/bf/034550c7b6811a2e440f031c9a5f36e8897e46": "ec9fb95968cb2765153f13f75a339367",
".git/objects/d3/6c441183a6877dd187b7fae62ad85ab812ced6": "822b78255dec18a5f9fc043fa903fa71",
".git/objects/d3/da4b0c7a33b4a859d7f4054cdf997a7f74fd5f": "7a1dbd50862369f7948b99d35a5ec5bb",
".git/objects/d3/b93f59f226d64e45e6533680c0445ae9efd2f6": "148ae18844a2720e4c3e0a58a4f5239f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/389dbd8970aede48126f894f4cf0bc2f418deb": "47353bf31c2f921cd61ba6fd3faebac2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f9/738f8e39e96ee6538f8a4dc9b644e1d7b0da6f": "e50a56d3ac6eed1e4a617dc5a1f66a58",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/e7/58e8d03b7ab44f4cb134c5ab5fcf686f9df356": "c1acf62693b18d1474626a7096b6bf26",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/2998d90a45bcf29991aafe69232f0e6a52d5dc": "965f9d22dece2d662ae6ef7fc16e325e",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/1c/ddb663d1c8914c051ce9d42e76cbb4b67c74b9": "a8137f4302d4dee2a8e1c3601bf964d0",
".git/objects/2b/60b377d30253938c9cd474febabfb863a684c4": "3a3cfc8652912a7cdf952265e6f95d94",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "eb3db31c3944473efb79d319601f4715",
".git/logs/refs/heads/main": "a962e92979b2ed05eea3bb6945a24c42",
".git/logs/refs/remotes/origin/main": "ceb10e01dfddd69be22123957812fdcd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b68963f574504dd4439b330bb64ef0a8",
".git/refs/remotes/origin/main": "b68963f574504dd4439b330bb64ef0a8",
".git/index": "5221000101c7cd0d9611dda3b3aa9dff",
".git/COMMIT_EDITMSG": "175f000d61d27c02951aca773f2b508c",
".git/FETCH_HEAD": "ace276e223d8fea8c89b097a95a69555",
"assets/AssetManifest.json": "0191b45a07d7b93d55b78a826c4f19e6",
"assets/NOTICES": "bb0b25b0832ad28123a69df42ebb415a",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "dfa6234f012a92397cba353dbe026d3e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "7791a5b3848f2ab181007d053f74ba61",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "83f7faf264ab763d7f189ad46a967755",
"assets/fonts/MaterialIcons-Regular.otf": "dd6ff7e8292e86b6a03b856bad9cd50e",
"assets/assets/images/shovon_pp.png": "be6137079374a3c7b3c64d6032121fc6",
"assets/assets/logo/s_logo.jpeg": "2608769ae33d00f03c628a5de7387ab2",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
