var foxpush_config =
{
  domain:'cryptohawk.com',
  foxsubdomain:'cryptohawkcom',
  icon:'https://publisher.foxpush.com/api/api_uploads/jpg/foxpush_a6f75985fc.jpg',
  title:'Subscribe for updates & news',
  desc:'Keep up to date with our latest news by clicking Allow.',
  short_title:'Notification',
  allow_text:'Allow',
  deny_text:'Maybe Later',
  allow_mobile:1,
  allow_firefox:0,
  allow_safari:0,
  popup_style:'native',
  is_cache:'',
  allow_prompt:0,
  prompt_message:'',
  allow_popunder:'0',
  allow_cname:'0',
  domain_cname:'',
  hostname:'https://cryptohawkcom.foxpush.net',
  thanks_for_subscription_msg:'Thanks for subscribing.',
  close_text:'Close',
  update_time:'Friday 19th of January 2018 03:32:15 PM',
};

var foxpush_localstorage_config = {
    foxpush_localstorage:0,
    foxpush_status:'none',
    foxpush_user_token:'',
    foxpush_segmentation:''
};function fox_browser() {

        var t = true;

        function detect(ua) {

            function getFirstMatch(regex) {
                var match = ua.match(regex);
                return (match && match.length > 1 && match[1]) || '';
            }

            function getSecondMatch(regex) {
                var match = ua.match(regex);
                return (match && match.length > 1 && match[2]) || '';
            }

            var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
                    , likeAndroid = /like android/i.test(ua)
                    , android = !likeAndroid && /android/i.test(ua)
                    , nexusMobile = /nexus\s*[0-6]\s*/i.test(ua)
                    , nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua)
                    , chromeos = /CrOS/.test(ua)
                    , silk = /silk/i.test(ua)
                    , sailfish = /sailfish/i.test(ua)
                    , tizen = /tizen/i.test(ua)
                    , webos = /(web|hpw)os/i.test(ua)
                    , windowsphone = /windows phone/i.test(ua)
                    , samsungBrowser = /SamsungBrowser/i.test(ua)
                    , windows = !windowsphone && /windows/i.test(ua)
                    , mac = !iosdevice && !silk && /macintosh/i.test(ua)
                    , linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua)
                    , edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i)
                    , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
                    , tablet = /tablet/i.test(ua) && !/tablet pc/i.test(ua)
                    , mobile = !tablet && /[^-]mobi/i.test(ua)
                    , xbox = /xbox/i.test(ua)
                    , result

            if (/opera/i.test(ua)) {
                //  an old Opera
                result = {
                    name: 'Opera'
                    , opera: t
                    , version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
                }
            } else if (/opr|opios/i.test(ua)) {
                // a new Opera
                result = {
                    name: 'Opera'
                    , opera: t
                    , version: getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || versionIdentifier
                }
            }
            else if (/SamsungBrowser/i.test(ua)) {
                result = {
                    name: 'Samsung Internet for Android'
                    , samsungBrowser: t
                    , version: versionIdentifier || getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
                }
            }
            else if (/coast/i.test(ua)) {
                result = {
                    name: 'Opera Coast'
                    , coast: t
                    , version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
                }
            }
            else if (/yabrowser/i.test(ua)) {
                result = {
                    name: 'Yandex Browser'
                    , yandexbrowser: t
                    , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
                }
            }
            else if (/ucbrowser/i.test(ua)) {
                result = {
                    name: 'UC Browser'
                    , ucbrowser: t
                    , version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
                }
            }
            else if (/mxios/i.test(ua)) {
                result = {
                    name: 'Maxthon'
                    , maxthon: t
                    , version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
                }
            }
            else if (/epiphany/i.test(ua)) {
                result = {
                    name: 'Epiphany'
                    , epiphany: t
                    , version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
                }
            }
            else if (/puffin/i.test(ua)) {
                result = {
                    name: 'Puffin'
                    , puffin: t
                    , version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
                }
            }
            else if (/sleipnir/i.test(ua)) {
                result = {
                    name: 'Sleipnir'
                    , sleipnir: t
                    , version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
                }
            }
            else if (/k-meleon/i.test(ua)) {
                result = {
                    name: 'K-Meleon'
                    , kMeleon: t
                    , version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
                }
            }
            else if (windowsphone) {
                result = {
                    name: 'Windows Phone'
                    , windowsphone: t
                }
                if (edgeVersion) {
                    result.msedge = t
                    result.version = edgeVersion
                }
                else {
                    result.msie = t
                    result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
                }
            }
            else if (/msie|trident/i.test(ua)) {
                result = {
                    name: 'Internet Explorer'
                    , msie: t
                    , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
                }
            } else if (chromeos) {
                result = {
                    name: 'Chrome'
                    , chromeos: t
                    , chromeBook: t
                    , chrome: t
                    , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                }
            } else if (/chrome.+? edge/i.test(ua)) {
                result = {
                    name: 'Microsoft Edge'
                    , msedge: t
                    , version: edgeVersion
                }
            }
            else if (/vivaldi/i.test(ua)) {
                result = {
                    name: 'Vivaldi'
                    , vivaldi: t
                    , version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
                }
            }
            else if (sailfish) {
                result = {
                    name: 'Sailfish'
                    , sailfish: t
                    , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
                }
            }
            else if (/seamonkey\//i.test(ua)) {
                result = {
                    name: 'SeaMonkey'
                    , seamonkey: t
                    , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
                }
            }
            else if (/firefox|iceweasel|fxios/i.test(ua)) {
                result = {
                    name: 'Firefox'
                    , firefox: t
                    , version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
                }
                if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
                    result.firefoxos = t
                }
            }
            else if (silk) {
                result =  {
                    name: 'Amazon Silk'
                    , silk: t
                    , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
                }
            }
            else if (/phantom/i.test(ua)) {
                result = {
                    name: 'PhantomJS'
                    , phantom: t
                    , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
                }
            }
            else if (/slimerjs/i.test(ua)) {
                result = {
                    name: 'SlimerJS'
                    , slimer: t
                    , version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
                }
            }
            else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
                result = {
                    name: 'BlackBerry'
                    , blackberry: t
                    , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
                }
            }
            else if (webos) {
                result = {
                    name: 'WebOS'
                    , webos: t
                    , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
                };
                /touchpad\//i.test(ua) && (result.touchpad = t)
            }
            else if (/bada/i.test(ua)) {
                result = {
                    name: 'Bada'
                    , bada: t
                    , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
                };
            }
            else if (tizen) {
                result = {
                    name: 'Tizen'
                    , tizen: t
                    , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
                };
            }
            else if (/qupzilla/i.test(ua)) {
                result = {
                    name: 'QupZilla'
                    , qupzilla: t
                    , version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
                }
            }
            else if (/chromium/i.test(ua)) {
                result = {
                    name: 'Chromium'
                    , chromium: t
                    , version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
                }
            }
            else if (/chrome|crios|crmo/i.test(ua)) {
                result = {
                    name: 'Chrome'
                    , chrome: t
                    , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                }
            }
            else if (android) {
                result = {
                    name: 'Android'
                    , version: versionIdentifier
                }
            }
            else if (/safari|applewebkit/i.test(ua)) {
                result = {
                    name: 'Safari'
                    , safari: t
                }
                if (versionIdentifier) {
                    result.version = versionIdentifier
                }
            }
            else if (iosdevice) {
                result = {
                    name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
                }
                // WTF: version is not part of user agent in web apps
                if (versionIdentifier) {
                    result.version = versionIdentifier
                }
            }
            else if(/googlebot/i.test(ua)) {
                result = {
                    name: 'Googlebot'
                    , googlebot: t
                    , version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
                }
            }
            else {
                result = {
                    name: getFirstMatch(/^(.*)\/(.*) /),
                    version: getSecondMatch(/^(.*)\/(.*) /)
                };
            }

            // set webkit or gecko flag for browsers based on these engines
            if (!result.msedge && /(apple)?webkit/i.test(ua)) {
                if (/(apple)?webkit\/537\.36/i.test(ua)) {
                    result.name = result.name || "Blink"
                    result.blink = t
                } else {
                    result.name = result.name || "Webkit"
                    result.webkit = t
                }
                if (!result.version && versionIdentifier) {
                    result.version = versionIdentifier
                }
            } else if (!result.opera && /gecko\//i.test(ua)) {
                result.name = result.name || "Gecko"
                result.gecko = t
                result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
            }

            // set OS flags for platforms that have multiple browsers
            if (!result.windowsphone && !result.msedge && (android || result.silk)) {
                result.android = t
            } else if (!result.windowsphone && !result.msedge && iosdevice) {
                result[iosdevice] = t
                result.ios = t
            } else if (mac) {
                result.mac = t
            } else if (xbox) {
                result.xbox = t
            } else if (windows) {
                result.windows = t
            } else if (linux) {
                result.linux = t
            }

            function getWindowsVersion (s) {
                switch (s) {
                    case 'NT': return 'NT'
                    case 'XP': return 'XP'
                    case 'NT 5.0': return '2000'
                    case 'NT 5.1': return 'XP'
                    case 'NT 5.2': return '2003'
                    case 'NT 6.0': return 'Vista'
                    case 'NT 6.1': return '7'
                    case 'NT 6.2': return '8'
                    case 'NT 6.3': return '8.1'
                    case 'NT 10.0': return '10'
                    default: return undefined
                }
            }

            // OS version extraction
            var osVersion = '';
            if (result.windows) {
                osVersion = getWindowsVersion(getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i))
            } else if (result.windowsphone) {
                osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
            } else if (result.mac) {
                osVersion = getFirstMatch(/Mac OS X (\d+([_\.\s]\d+)*)/i);
                osVersion = osVersion.replace(/[_\s]/g, '.');
            } else if (iosdevice) {
                osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
                osVersion = osVersion.replace(/[_\s]/g, '.');
            } else if (android) {
                osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
            } else if (result.webos) {
                osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
            } else if (result.blackberry) {
                osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
            } else if (result.bada) {
                osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
            } else if (result.tizen) {
                osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
            }
            if (osVersion) {
                result.osversion = osVersion;
            }

            // device type extraction
            var osMajorVersion = !result.windows && osVersion.split('.')[0];
            if (
                    tablet
                    || nexusTablet
                    || iosdevice == 'ipad'
                    || (android && (osMajorVersion == 3 || (osMajorVersion >= 4 && !mobile)))
                    || result.silk
            ) {
                result.tablet = t
            } else if (
                    mobile
                    || iosdevice == 'iphone'
                    || iosdevice == 'ipod'
                    || android
                    || nexusMobile
                    || result.blackberry
                    || result.webos
                    || result.bada
            ) {
                result.mobile = t
            }

            // Graded Browser Support
            // http://developer.yahoo.com/yui/articles/gbs
            if (result.msedge ||
                    (result.msie && result.version >= 10) ||
                    (result.yandexbrowser && result.version >= 15) ||
                    (result.vivaldi && result.version >= 1.0) ||
                    (result.chrome && result.version >= 20) ||
                    (result.samsungBrowser && result.version >= 4) ||
                    (result.firefox && result.version >= 20.0) ||
                    (result.safari && result.version >= 6) ||
                    (result.opera && result.version >= 10.0) ||
                    (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
                    (result.blackberry && result.version >= 10.1)
                    || (result.chromium && result.version >= 20)
            ) {
                result.a = t;
            }
            else if ((result.msie && result.version < 10) ||
                    (result.chrome && result.version < 20) ||
                    (result.firefox && result.version < 20.0) ||
                    (result.safari && result.version < 6) ||
                    (result.opera && result.version < 10.0) ||
                    (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
                    || (result.chromium && result.version < 20)
            ) {
                result.c = t
            } else result.x = t

            return result
        }

        var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent || '' : '')

        bowser.test = function (browserList) {
            for (var i = 0; i < browserList.length; ++i) {
                var browserItem = browserList[i];
                if (typeof browserItem=== 'string') {
                    if (browserItem in bowser) {
                        return true;
                    }
                }
            }
            return false;
        }

        /**
         * Get version precisions count
         *
         * @example
         *   getVersionPrecision("1.10.3") // 3
         *
         * @param  {string} version
         * @return {number}
         */
        function getVersionPrecision(version) {
            return version.split(".").length;
        }

        /**
         * Array::map polyfill
         *
         * @param  {Array} arr
         * @param  {Function} iterator
         * @return {Array}
         */
        function map(arr, iterator) {
            var result = [], i;
            if (Array.prototype.map) {
                return Array.prototype.map.call(arr, iterator);
            }
            for (i = 0; i < arr.length; i++) {
                result.push(iterator(arr[i]));
            }
            return result;
        }

        /**
         * Calculate browser version weight
         *
         * @example
         *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
         *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
         *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
         *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
         *
         * @param  {Array<String>} versions versions to compare
         * @return {Number} comparison result
         */
        function compareVersions(versions) {
            // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
            var precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1]));
            var chunks = map(versions, function (version) {
                var delta = precision - getVersionPrecision(version);

                // 2) "9" -> "9.0" (for precision = 2)
                version = version + new Array(delta + 1).join(".0");

                // 3) "9.0" -> ["000000000"", "000000009"]
                return map(version.split("."), function (chunk) {
                    return new Array(20 - chunk.length).join("0") + chunk;
                }).reverse();
            });

            // iterate in reverse order by reversed chunks array
            while (--precision >= 0) {
                // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
                if (chunks[0][precision] > chunks[1][precision]) {
                    return 1;
                }
                else if (chunks[0][precision] === chunks[1][precision]) {
                    if (precision === 0) {
                        // all version chunks are same
                        return 0;
                    }
                }
                else {
                    return -1;
                }
            }
        }

        /**
         * Check if browser is unsupported
         *
         * @example
         *   bowser.isUnsupportedBrowser({
   *     msie: "10",
   *     firefox: "23",
   *     chrome: "29",
   *     safari: "5.1",
   *     opera: "16",
   *     phantom: "534"
   *   });
         *
         * @param  {Object}  minVersions map of minimal version to browser
         * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
         * @param  {String}  [ua] user agent string
         * @return {Boolean}
         */
        function isUnsupportedBrowser(minVersions, strictMode, ua) {
            var _bowser = bowser;

            // make strictMode param optional with ua param usage
            if (typeof strictMode === 'string') {
                ua = strictMode;
                strictMode = void(0);
            }

            if (strictMode === void(0)) {
                strictMode = false;
            }
            if (ua) {
                _bowser = detect(ua);
            }

            var version = "" + _bowser.version;
            for (var browser in minVersions) {
                if (minVersions.hasOwnProperty(browser)) {
                    if (_bowser[browser]) {
                        if (typeof minVersions[browser] !== 'string') {
                            throw new Error('Browser version in the minVersion map should be a string: ' + browser + ': ' + String(minVersions));
                        }

                        // browser version and min supported version.
                        return compareVersions([version, minVersions[browser]]) < 0;
                    }
                }
            }

            return strictMode; // not found
        }

        /**
         * Check if browser is supported
         *
         * @param  {Object} minVersions map of minimal version to browser
         * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
         * @param  {String}  [ua] user agent string
         * @return {Boolean}
         */
        function check(minVersions, strictMode, ua) {
            return !isUnsupportedBrowser(minVersions, strictMode, ua);
        }

        bowser.isUnsupportedBrowser = isUnsupportedBrowser;
        bowser.compareVersions = compareVersions;
        bowser.check = check;

        /*
         * Set our detect method to the main bowser object so we can
         * reuse it to test other user agents.
         * This is needed to implement future tests.
         */
        bowser._detect = detect;

        return bowser
        }
        
        var fox_bowser = fox_browser();
        //console.log(fox_bowser);
        
        eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('8 1p(t){3 N,a=1I,L=a.u,W;S(L>1&&t.u){N=a[--L];S((W=t.13(N))!==-1){t.1H(W,1);}}U t;}8 J(7){3 a;4(5.k(\'f\')===1m||5.k(\'f\')==\'\'){a=[];}b{a=1k.1y(H.1q(5.k(\'f\')));}4(a.1G(\',\').13(7)>-1){U p;}b{U o;}}8 C(D,v){3 a;4(5.k(\'f\')===1m||5.k(\'f\')==\'\'){a=[];}b{a=1k.1y(H.1q(5.k(\'f\')));}4(v==\'P\'){a.1J(D);}b{1p(a,D);}3 R={};1F(3 i=0;i<a.u;++i){4(a[i]!==j)R[i]=a[i];}5.1K(\'f\',H.1M(R));}8 1L(7){4(5.q!==j&&J(7)==o){3 I=10 1i();I.Z(\'1h\',\'z://1e.y.G/1d/?Q=\'+5.q+\'&1a=\'+7+\'&v=P&x=\'+1c.x,p);I.1b();C(7,\'P\');}}8 1N(7){4(5.q!==j&&J(7)==p){3 F=10 1i();F.Z(\'1h\',\'z://1e.y.G/1d/?Q=\'+5.q+\'&1a=\'+7+\'&v=1j&x=\'+1c.x,p);F.1b();C(7,\'1j\');}}8 1f(1A,1s){3 n=9.1w(\'n\');n.1S=1s;S(n.1r.u>0){1A.1o(n.1r[0]);}}3 16=\'<19 2b="z://1u.y.2c/r/?A=\'+2d(9.A)+\'"  2a="m: M; d: M; 29: M; 26: 27;"  2f="0"></19>\';1f(9.2e,16);3 K=6.V?"V":"11";3 18=6[K];3 14=K=="11"?"2g":"2j";18(14,8(e){4(e.r){4(e.r.17!==j){5.1O=e.r.17;5.q=e.r.Q;}}},o);3 T=8(){3 l=9.1w(\'2h\');l.2i=\'28\';l.24=\'z://1t.y.G/1u.1t?1U=\'+1V.1T()+\'\';9.25(\'1P\')[0].1o(l);};3 O=1Q||1R||1W||1X;4(O)O(T);b 6.V(\'22\',T);8 23(E,A,w,h,1n){3 Y=p;4(1n==o){Y=o;}4(2==1){21(E);}b{3 15=6.1B!=j?6.1B:s.c;3 12=6.1D!=j?6.1D:s.g;3 m=6.1z?6.1z:9.B.1v?9.B.1v:s.m;3 d=6.1x?6.1x:9.B.1E?9.B.1E:s.d;4(Y){3 c=((m/2)-(w/2))+15;3 g=((d/2)-(h/2))+12;}b{3 c=20;3 g=s.d;;w=1;h=1;}3 X=6.Z(E,A,\'1C=1l, m=\'+w+\', d=\'+h+\', g=\'+g+\', c=\'+c);1Y.1Z(\'1C=1l, m=\'+w+\', d=\'+h+\', g=\'+g+\', c=\'+c);4(X.1g){X.1g();}}}',62,144,'|||var|if|localStorage|window|id|function|document||else|left|height||foxpush_segmentation|top|||undefined|getItem||width|div|false|true|foxpush_user_token|data|screen|arr|length|type||domain|foxpush|https|title|documentElement|_foxpush_local_segment|segment_id|url|segment_unsubscribe|com|JSON|segment_subscribe|_foxpush_check_segment|eventMethod||0px|what|raf|subscribe|token|rv|while|cb|return|addEventListener|ax|newWindow|is_center|open|new|attachEvent|dualScreenTop|indexOf|messageEvent|dualScreenLeft|fp_data_frame|status|eventer|iframe|sid|send|foxpush_config|segment|subscribes|fox_appendHtml|blur|GET|XMLHttpRequest|unsubscribe|Object|yes|null|center|appendChild|_foxpush_removeA|parse|children|str|css|cryptohawkcom|clientWidth|createElement|innerHeight|values|innerWidth|el|screenLeft|scrollbars|screenTop|clientHeight|for|join|splice|arguments|push|setItem|_foxpush_subscribe|stringify|_foxpush_unsubscribe|foxpush_status|head|requestAnimationFrame|mozRequestAnimationFrame|innerHTML|random|rand|Math|webkitRequestAnimationFrame|msRequestAnimationFrame|console|log|100|fp_jsPopunder|load|foxpush_window|href|getElementsByTagName|display|none|stylesheet|border|style|src|net|encodeURIComponent|body|frameborder|onmessage|link|rel|message'.split('|')))

                function fp_render_deny_box()
                {
                    var fp_deny_box = '<div class="foxpush_blocked_box foxpush_blocked_box_left" style="display: none;" id="foxpush_subscribe"><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 535.5 535.5" style="enable-background:new 0 0 535.5 535.5;" xml:space="preserve"><g><g id="notifications-on"><path d="M142.8,53.55l-35.7-35.7C45.9,63.75,5.1,135.15,0,216.75h51C56.1,147.9,89.25,89.25,142.8,53.55z M484.5,216.75h51    c-5.1-81.6-43.35-153-104.55-198.9l-35.7,35.7C446.25,89.25,479.4,147.9,484.5,216.75z M433.5,229.5    c0-79.05-53.55-142.8-127.5-160.65V51c0-20.4-17.85-38.25-38.25-38.25c-20.4,0-38.25,17.85-38.25,38.25v17.85    C155.55,86.7,102,150.45,102,229.5v140.25l-51,51v25.5h433.5v-25.5l-51-51V229.5z M267.75,522.75c2.55,0,7.65,0,10.2,0    c17.85-2.55,30.6-15.3,35.7-30.6c2.55-5.101,5.1-12.75,5.1-20.4h-102C216.75,499.8,239.7,522.75,267.75,522.75z"/></g></g></svg>'+ foxpush_config.short_title +'</span>';
                    fox_appendHtml(document.body, fp_deny_box);
                }
            eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('q p(){o b=\'<0 1="f"5="f"8="e: c;">\\<0 1="n">\\<0 1="r">\\<3 1="s"5="v"></3>\\<u 7="\'+ 2.m +\'"t=""/>\\</0>\\<0 1="w">\\<9>\'+ 2.l +\'</9>\\<a 6="#"1="k j"5="i">\'+ 2.g +\'</a>\\</0><3 1="h">\\<a 6="I://M.L.K/?J=\'+ 2.x +\'"N="O">R Q P</a>\\</3></0>\\</0>\\<d 7="\'+ 2.H +\'/B.A"z="y"8="C: 4; D: 4; G: 4; e: c;"></d>\';F(E.S,b);}',55,55,'div|class|foxpush_config|span|0px|id|href|src|style|h3||overlay_box_html|none|iframe|display|foxpush_thanksbox_overlay|close_text|foxpush_copyright|foxpush_subscribe|foxpush_allow|foxpush_btn|thanks_for_subscription_msg|icon|foxpush_thanksbox|var|fp_render_native_box|function|foxpush_overlay_cover|close|alt|img|foxpush_close_overlay|foxpush_overlay_content|foxsubdomain|hidden|visibility|html|http_native|width|height|document|fox_appendHtml|border|hostname|https|ref|com|foxpush|www|target|_blank|FoxPush|by|Powered|body'.split('|')))
var allow_native_prompt = 0;eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('2L 2K(){1z 1c=\'<a b="2J">\\<a f="2y"></a>\\<p f="2q">\'+ 18.16 +\'&19;1d 1a</p>\\<p f="2o">\\<q f="2w">\\<i L="R: 2t; 13: #2M;P-M:N 0 0 j.5 j.5;"K="1.1"b="1t"r="s://t.v.o/W/i"r:u="s://t.v.o/O/u"x="n"y="n"J="0 0 j.5 j.5"14:11="Z">\\<g>\\<g b="H">\\<Y d="2l,36.E,0,w-22.V,w-3b,3e.E,3f.V,3d,1i,3c 3g.h,2T.h\\1n-1b.E-A.m-Q.8-D.5-X.1E.1H.25,17.l,1J.4,0,1i,28-20.4,0-38.25,17.l-38.25,38.1S.1\\c-1X.V,17.l-D.5,1g.6-D.5,X.27-w,1s.1p.1T.h,1Q"></Y>\\</g>\\</g>\\</i>\\</q>\\<q f="1O">\\2g H\\</q>\\</p>\\<a b="1W">\\<e F="e"b="1v">1u</e>\\<e F="e"b="1h">1l</e>\\</a></a>\';1z 1y=\'<a b="1Y">\\<a b="1Z">\\<a f="24">\\<i L="P-M:N 0 0 j.5 j.5;R: 1V; 13: #1U;"K="1.1"b="1t"r="s://t.v.o/W/i"r:u="s://t.v.o/O/u"x="n"y="n"J="0 0 j.5 j.5"14:11="Z">\\<g>\\<g b="H-1P">\\<Y d="26.8,A.1N-35.7-35.2f.9,2h.h,5.1,2i.15,0,U.2j.1,1f.9,T.25,T.25,Q.8,A.2e 2d.5,U.29\\c-5.1-1g.6-2a.35-2b-2c.m-2k.1D-35.7,35.1F.25,T.25,1G.4,1f.9,1M.5,U.1e 1K.5,1q.5\\1n-1b.E-A.m-Q.8-D.5-X.1I-20.4-17.l-38.25-38.25-38.1L-20.4,0-38.25,17.l-38.25,38.1R.l\\3a.m,2W.7,1A,2V.2X,1A,1q.2Y.2Z-w,1s.1p.2U-25.2P-w-2O.2Q 2R.h,S.2S.m,0,7.31,0,10.2,0\\32.l-2.m,30.6-15.3,35.7-30.34.m-5.33,5.1-12.h,5.1-20.37-39.h,2N.8,2u.7,S.h,2v.h,S.1e"/>\\</g>\\</g>\\</i>\\</a>\\<a f="2x">\\<q>\'+ 18.16 +\'&19;1d 1a 2s 2r H.</q>\\</a>\\<a f="2n"b="2m">\\<i r="s://t.v.o/W/i"r:u="s://t.v.o/O/u"K="1.1"b="2p"x="n"y="n"J="0 0 k.23 k.23"L="P-M:N 0 0 k.23 k.23;R: 1w;2z: 1w"14:11="Z">\\<2I 2H="k.23,21.C B.z,0 G.I,1x.1C 21.C,0 0,21.C 1x.1C,G.I 0,B.z 21.C,k.23   G.I,1o.1m B.z,k.23 k.23,B.z 1o.1m,G.I "13="#2G"/>\\</i>\\</a>\\<a f="2F">\\<e F="e"b="1h"f="2B">1l</e>\\<e F="e"b="1v">1u</e>\\</a>\\</a>\\</a>\';2A(1B.2C||1B.2D){1k(1r.1j,1y);}2E{1k(1r.1j,1c);}}',62,203,'||||||||||div|id|||button|class||75|svg|535|371|85|55|0px|org||span|xmlns|http|www|xlink|w3|51|||018|53|350|213|127|05|type|185|notifications|615|viewBox|version|style|background|new|1999|enable|142|width|522|89|216|95|2000|160|path|preserve||space||fill|xml||domain||foxpush_config|nbsp|to|79|desktop_html|wants|75z|147|81|foxpush_subscribe|255|body|fox_appendHtml|Allow|828|c0|206|5h433|229|document|51v25|foxpushlogo|Block|foxpush_deny|15px|164|mobile_html|var|102|fox_bowser|402|9l|65V38|7C446|479|25C293|65V51c0|275|M433|25c|484|55l|text|on|357z|25v17|25V56|5V408L420|4286f5|25px|foxpush_buttons|73|foxpush_native_html_mobile|foxpush_native_mobile_content|||||foxpush_bill_icon||M142|65V357l|0c|75h51|43|153|104|M484|55z|7C45|Show|63|135|75h51C56|198|M255|foxpush_close_promptmessage|foxpush_mobile_closebtn|notification_icon|Layer_1|domain_name|you|send|16px|239|267|icon|foxpush_website_name|arrow_box|height|if|foxpush_allow_btn|mobile|tablet|else|foxpush_mobile_native_content|3d3d3d|points|polygon|foxpush_native_html|fp_render_native_html|function|6c6d6c|499|51V229|5l|5z|M267|75c2|357V216|5v|150|86|45|5v140|25l||65|c17|101|6c2||510c28|4h||102C216|C155|51H204C204|510z|510|487|226|M420'.split('|')))
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('1T.1U(\'%c 1V 1S 1R 1q: 1t.13 \',\'1O: #1P; 1Q: #1W;1X-23:24;\');h J(){g.m=\'s\';4(b.x==\'1b\'){2.3(\'19\').5.7(\'6\',\'d\',\'8\');}i 4(b.x==\'16\'){2.3(\'K\').5.7(\'6\',\'d\',\'8\');}i 4(b.x==\'W\'){2.3(\'S\').5.7(\'6\',\'d\',\'8\');}l p;}h Y(){e X=1d.22||1d.1Y||1h.1Z;l(X.1e("1N")>-1)||(X.1e("1I")>-1);}e u=p;4(!g.T){g.T=P.T;g.m=P.m;g.12=P.12;g.1c=P.1c;}e D=f;4(o.1y&&o.L>=1C){D=p;}i 4(o.1D&&o.L>9){D=p;}i 4(o.1A&&o.L>1z){D=p;}4(o.1M){D=f;}4(v(1u)!==\'w\'&&D==p&&!Y()){g.T=1;4(o.1x&&b.1L==0){u=f;}4(g.m==\'1o\'){u=f;}4(u==p&&g.m!=\'s\'&&b.x==\'1b\'){1E();e F=2.3(\'F\');F.n=h(){J();l f;};e q=2.3(\'M\');q.n=h(){J();l f;};e k=2.3(\'C\');k.n=h(){2.3(\'19\').5.7(\'6\',\'d\',\'8\');y(b.t,\'B\',z,A);l f;};}i 4(u==p&&g.m!=\'s\'&&b.x==\'1m\'&&1k(o.L)>18){1G();e k=2.3(\'C\');4(v(k)!=\'w\'&&k!=O){k.n=h(){e j=2.3(\'j\');4(v(j)!=\'w\'&&j!=O){j.5.7(\'6\',\'d\',\'8\');}4(o.1a||o.1f){2.3(\'1g\').5.7(\'6\',\'d\',\'8\');}i{2.3(\'1l\').5.7(\'6\',\'d\',\'8\');}y(b.t,\'B\',z,A);l f;};}e q=2.3(\'M\');4(v(q)!=\'w\'&&q!=O){q.n=h(){J();e j=2.3(\'j\');4(v(j)!=\'w\'&&j!=O){j.5.7(\'6\',\'d\',\'8\');}4(o.1a||o.1f){2.3(\'1g\').5.7(\'6\',\'d\',\'8\');}i{2.3(\'1l\').5.7(\'6\',\'d\',\'8\');}l f;};}}i 4(u==p&&g.m!=\'s\'&&b.x==\'1m\'&&1k(o.L)<=18){2q();1h.2s(\'2y\',h(R){e 1n=R.1i||R.2D.1i;4(1n==b.t){e r=2B.2A(R.2E);4(v(r.14)!==w){g.12=r.14;}4(v(r.H)!==w){4(r.H=="2p"){4(I==1){2.3(\'j\').5.7(\'6\',\'d\',\'8\');}2.3(\'N\').5.7(\'6\',\'V\',\'8\');}i 4(r.H=="2d"){g.m=\'\';4(I==1){2.3(\'j\').5.7(\'6\',\'d\',\'8\');}}i 4(r.H=="2e"){g.m=\'s\';4(I==1){2.3(\'j\').5.7(\'6\',\'d\',\'8\');}}i 4(r.H=="1o"){4(I==1){2.3(\'j\').5.7(\'6\',\'d\',\'8\');}}i 4(r.H=="28"){4(I==1){2.3(\'j\').5.7(\'6\',\'V\',\'8\');}}}i{4(I==1){2.3(\'j\').5.7(\'6\',\'V\',\'8\');}}}},f);e k=2.3(\'C\');k.n=h(){2.3(\'N\').5.7(\'6\',\'d\',\'8\');y(b.t+\'/?Q=11\',\'B\',z,A,f);l f;};e F=2.3(\'F\');F.n=h(){2.3(\'N\').5.7(\'6\',\'d\',\'8\');y(b.t+\'/?Q=11\',\'B\',z,A,f);l f;};e 15=2.3(\'N\');15.n=h(){2.3(\'N\').5.7(\'6\',\'d\',\'8\');y(b.t+\'/?Q=11\',\'B\',z,A,f);l f;};}i 4(u==p&&g.m!=\'s\'&&b.x==\'16\'){Z();e q=2.3(\'M\');q.n=h(){J();l f;};e k=2.3(\'C\');k.n=h(){2.3(\'K\').5.7(\'6\',\'d\',\'8\');y(b.t,\'B\',z,A);l f;};}i 4(u==p&&g.m!=\'s\'&&b.x==\'W\'){2h();e k=2.3(\'S\');k.n=h(){2.3(\'S\').5.7(\'6\',\'d\',\'8\');y(b.t,\'B\',z,A);l f;};}i 4(u==p&&g.m==\'s\'){2i();e k=2.3(\'C\');k.n=h(){2.3(\'C\').5.7(\'6\',\'d\',\'8\');y(b.t,\'B\',z,A);l f;};}}i 4(v(1u)!==\'w\'&&D==p&&Y()){4(g.m==\'d\'){h Z(){e 17=\'<E 10="K"5="6:d;"G="2m 2g">\\<E G="S">\\<2b 2o="\'+ b.W +\'"2x=""/>\\</E>\\<E G="2z">\\<1p>\'+ b.2C +\'</1p>\\<1s>\'+ b.2r +\'</1s>\\<a U="2t://2u.1j.2w/?Q=26#2c;20=1v;1H=13.1x.1y;1F"10="C"G="1r 1J">\'+ b.1K +\'</a>\\<a U="#"10="M"G="1r 1B">\'+ b.25 +\'</a><1w G="21">\\<a U="1v://2k.1j.13?2f=\'+ b.29 +\'"27="2n">2l 1q 1t</a>\\</1w></E></E>\';2v(2.2j,17);}Z();e q=2.3(\'M\');q.n=h(){g.m=\'s\';2.3(\'K\').5.7(\'6\',\'d\',\'8\');l f;};e k=2.3(\'C\');k.n=h(){g.m=\'2a\';2.3(\'K\').5.7(\'6\',\'d\',\'8\');};}}',62,165,'||document|getElementById|if|style|display|setProperty|important|||foxpush_config||none|var|false|localStorage|function|else|foxpush_prompt_message|foxpush_subscribe_button|return|foxpush_status|onclick|fox_bowser|true|foxpush_deny_button|subscriber|blocked|hostname|foxpush_popup_allowed|typeof|undefined|popup_style|foxpush_window|400|500|foxpsuh_window|foxpush_subscribe|supported_browser|div|foxpush_close_overlay|class|state|allow_native_prompt|foxpsuh_blocked|foxpush_box|version|foxpush_deny|foxpush_thanksbox_overlay|null|foxpush_localstorage_config|source|event|foxpush_icon|foxpush_localstorage|href|block|icon|ua|isFacebookApp|fp_render_box|id|nativehttp|foxpush_user_token|com|token|foxpush_close_wrapper|box|fp_box_html|61|foxpush_overlay|mobile|overlay|foxpush_segmentation|navigator|indexOf|tablet|foxpush_native_html_mobile|window|origin|foxpush|parseInt|foxpush_native_html|native|fox_origin|allowed|h1|by|foxpush_btn|h3|FoxPush|Storage|https|span|android|chrome|44|firefox|foxpush_block|40|safari|fp_render_overlay_box|end|fp_render_native_html|package|FBAV|foxpush_allow|allow_text|allow_mobile|ios|FBAN|background|222|color|powered|notifications|console|log|Push|bada55|font|vendor|opera|scheme|foxpush_copyright|userAgent|size|20px|deny_text|fb_browser|target|prompt|foxsubdomain|success|img|Intent|default|denied|ref|fox_dir_ltr|fp_render_icon|fp_render_deny_box|body|www|Powered|foxpush_postion_top|_0|src|granted|fp_render_native_box|desc|addEventListener|intent|cryptohawkcom|fox_appendHtml|net|alt|message|foxpush_content|parse|JSON|title|originalEvent|data'.split('|'),0,{}))
