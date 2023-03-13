import React, { Component } from 'react'
import Newsitem from './Newsitem'



export class News extends Component {
  
  articles= [
    {
"source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Juli Clover",
    "title": "Apple Releases Safari Technology Preview 165 With Bug Fixes and Performance Improvements",
    "description": "Apple today released a new update for Safari Technology Preview, the experimental browser Apple first introduced in March 2016. Apple designed the ‌Safari Technology Preview‌ to test features that may be introduced into future release versions of Safari.\n\n\n\n\n…",
    "url": "https://www.macrumors.com/2023/03/08/apple-releases-safari-technology-preview-165/",
    "urlToImage": "https://images.macrumors.com/t/jHD1aGfXq86Ln_kfzTyWIF68vOo=/2368x/article-new/2021/02/Safari-Technology-Preview-Feature.jpg",
    "publishedAt": "2023-03-09T00:34:48Z",
    "content": "Apple today released a new update for Safari Technology Preview, the experimental browser Apple first introduced in March 2016. Apple designed the ‌Safari Technology Preview‌ to test features that ma… [+991 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Googleblog.com"
    },
    "author": null,
    "title": "OpenXLA Is Available Now",
    "description": "Comments",
    "url": "https://opensource.googleblog.com/2023/03/openxla-is-ready-to-accelerate-and-simplify-ml-development.html",
    "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZrDZ2tuaNEFx8v9nm7wcHQGkde6fokDjvydRQfw37cgNSV0ii1zbSMGNStv8EDPHSf_ZnEIWw0rWOTc9Pki0ca-SQPr4_oF8LdweJbTn2z8Ce6dZQmLa5OA-4uz0a1NotBjdcaA_UjlBym1mdBNv0OYzHHAkQ2oPEDZfpaIqG4e1WfFQQvLeHBjLM/w1200-h630-p-k-no-nu/Social%20-%20OSS%20-%20OpenXLA%20is%20Ready%20to%20Accelerate%20and%20Simplify%20ML%20Development%20%281%29.pngMG",
    "publishedAt": "2023-03-09T04:49:02Z",
    "content": "ML development and deployment today suffer from fragmented and siloed infrastructure that can differ by framework, hardware, and use case. Such fragmentation restrains developer velocity and imposes … [+14811 chars]"
    },
    {
"source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Ben Schwan",
    "title": "Bericht: Wieder Probleme bei Apple-Display-Fertiger BOE",
    "description": "BOE soll für Apple Displaylieferungen von Samsung und LG ergänzen – oder gar ersetzen. Doch die Display-Fertigung bei BOE läuft weiter nicht rund, heißt es.",
    "url": "https://www.heise.de/news/Bericht-Wieder-Probleme-bei-Apple-Display-Fertiger-BOE-7536458.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/7/1/2/8/8/8/shutterstock_1218992125-d2df6a146f592cbe.jpg",
    "publishedAt": "2023-03-09T09:32:00Z",
    "content": "Displays in iPhone und Co. kommen heute meistens von den Bildschirmabteilungen der großen südkoreanischen Konzerne Samsung und LG. Apple versucht hier seit Längerem, den chinesischen Konkurrenten BOE… [+2350 chars]"
    },
    {
"source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Andreas Schuchardt",
    "title": "Wie China auf das Chip-Embargo der USA reagiert",
    "description": "Der Chip-Krieg zwischen den USA und China eskaliert weiter. Inzwischen sind auch deutsche Unternehmen betroffen. Doch Analysten zweifeln an der Strategie.",
    "url": "https://www.heise.de/news/Wie-China-auf-das-Chip-Embargo-der-USA-reagiert-7535767.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/7/1/2/5/1/6/xi_jinping_und_joe_b_75884659-bbed9ea3d3a1f27e.jpeg",
    "publishedAt": "2023-03-09T07:53:00Z",
    "content": "Inhaltsverzeichnis\r\nDer Technologiekonflikt zwischen den USA und China weitet sich aus. Washington will die Volksrepublik technologisch isolieren und von Halbleitern der neuesten Generationen abschne… [+9502 chars]"
    },
    {
"source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Filipe Espósito",
    "title": "Poll: Do you like the new iPhone 14 and iPhone 14 Plus yellow color?",
    "description": "Apple on Tuesday announced a new yellow color for iPhone 14 and iPhone 14 Plus, following its tradition of introducing a new color for the iPhone lineup every spring. As the new color will be available to order this Friday, we now want to know your thoughts o…",
    "url": "https://9to5mac.com/2023/03/08/poll-iphone-14-plus-yellow-color/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/03/iPhone-14-yellow.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-03-09T02:18:09Z",
    "content": "Apple on Tuesday announced a new yellow color for iPhone 14 and iPhone 14 Plus, following its tradition of introducing a new color for the iPhone lineup every spring. As the new color will be availab… [+2155 chars]"
    },
    {
"source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Filipe Espósito",
    "title": "PSA: It’s not just you, Instagram is currently down for users around the world",
    "description": "If you’re experiencing issues when trying to use Instagram on Wednesday night, you’re not alone. Instagram is currently facing outages and is down for users around the world. Heres what we now know about the issue affecting Instagram users.\n more…\nThe post PS…",
    "url": "https://9to5mac.com/2023/03/08/not-just-you-instagram-is-down/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/instagram-down-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-03-09T03:00:35Z",
    "content": "If you’re experiencing issues when trying to use Instagram on Wednesday night, you’re not alone. Instagram is currently facing outages and is down for users around the world. Heres what we now know a… [+1627 chars]"
    },
    {
"source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Filipe Espósito",
    "title": "Ivory now lets users create a Mastodon account directly from the app",
    "description": "Ivory is a new client for the decentralized social network Mastodon, which has been gaining a lot of attention recently amid the latest changes announced by Twitter. The app, which was developed by Tapbots (the same company behind Tweetbot), has now been upda…",
    "url": "https://9to5mac.com/2023/03/08/ivory-create-mastodon-account/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/01/mastodon-chance.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-03-09T01:38:32Z",
    "content": "Ivory is a new client for the decentralized social network Mastodon, which has been gaining a lot of attention recently amid the latest changes announced by Twitter. The app, which was developed by T… [+2326 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Genbeta.com"
    },
    "author": "Bárbara Bécares",
    "title": "Spotify se convierte en TikTok para pasar de contenido en contenido y descubrir más podcast. Quejas masivas de los usuarios",
    "description": "Spotify ha presentado una nueva interfaz en un evento celebrado (bautizado como Stream On), con un rediseño que asemeja la plataforma de música a TikTok. El objetivo es que sus usuarios puedan pasar de unos contenidos a otros rápidamente, para poder llegar a …",
    "url": "https://www.genbeta.com/actualidad/spotify-se-convierte-tiktok-para-pasar-contenido-contenido-descubrir-podcast-quejas-masivas-usuarios",
    "urlToImage": "https://i.blogs.es/2b01ba/captura-de-pantalla-2023-03-09-090436/840_560.jpeg",
    "publishedAt": "2023-03-09T08:37:36Z",
    "content": "Spotify ha presentado una nueva interfaz en un evento celebrado (bautizado como Stream On), con un rediseño que asemeja la plataforma de música a TikTok. El objetivo es que sus usuarios puedan pasar … [+3388 chars]"
    },
    {
"source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Wesley Hilliard)",
    "title": "Apple tops Japan's smartphone shipment charts again in 2022",
    "description": "Despite a decline in sales and a weakened market, Apple continues to dominate Japan's smartphone market share for all of 2022.Apple is Japan's number one smartphone vender for 2022The fourth quarter of 2022 was tough for Apple thanks to iPhone 14 Pro producti…",
    "url": "https://appleinsider.com/articles/23/03/09/apple-tops-japans-smartphone-shipment-charts-again-in-2022",
    "urlToImage": "https://photos5.appleinsider.com/gallery/53391-107105-iPhone-14-cameras-xl.jpg",
    "publishedAt": "2023-03-09T01:04:46Z",
    "content": "Apple is Japan's number one smartphone vender for 2022\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nDespite a decline in sales and a weakened market, A… [+1566 chars]"
    },
    {
"source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Wesley Hilliard)",
    "title": "Third Studio Display 16.4 firmware beta now available",
    "description": "Apple has released the third Studio Display firmware beta for software version 16.4.Studio Display 16.4 firmware beta 3The beta cycle for iOS 16.4 and macOS Ventura 13.3 is on its third release. Users with the beta installed on a Mac connected to the Studio D…",
    "url": "https://appleinsider.com/articles/23/03/09/third-studio-display-164-firmware-beta-now-available",
    "urlToImage": "https://photos5.appleinsider.com/gallery/53392-107106-Studio-Display-lede-xl.jpg",
    "publishedAt": "2023-03-09T02:13:04Z",
    "content": "Studio Display 16.4 firmware beta 3\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nApple has released the third Studio Display firmware beta for software… [+730 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Macworld"
    },
    "author": "DealPost Team",
    "title": "Charge all your Apple gear with one USB-C cable — now 48% off",
    "description": "Apple keeps introducing amazing gear while making its current gear even better. But that leaves Apple fans with the dilemma of charging it all without dozens of wires. Enter this USB-C charging cable, that fills up iPhones, AirPods, and Apple Watches on one c…",
    "url": "https://www.macworld.com/article/1533143/charge-all-your-apple-gear-with-one-usb-c-cable-now-48-off.html",
    "urlToImage": "https://www.macworld.com/wp-content/uploads/2023/03/Macworld-3-in-1-USB-C-Charging-Cable-for-Apple-Watch-iPhone-AirPods.jpeg?quality=50&strip=all&w=1024",
    "publishedAt": "2023-03-09T08:00:00Z",
    "content": "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nApple keeps introduc… [+934 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Elespanol.com"
    },
    "author": "Manuel Ramírez",
    "title": "Android 14 rescata las antiguas notificaciones LED, aunque de una forma bien distinta y genial",
    "description": "El hecho de que los móviles ofrezcan una mayor autonomía les permite a los fabricantes aprovechar mejor la batería para generar una mejor experiencia, como será la de las notificaciones visuales en Android 14.",
    "url": "https://www.elespanol.com/elandroidelibre/noticias-y-novedades/20230309/android-rescata-antiguas-notificaciones-led-distinta-genial/747175287_0.html",
    "urlToImage": "https://s1.eestatic.com/2023/03/09/elandroidelibre/noticias-y-novedades/747185320_231502145_1200x630.jpg",
    "publishedAt": "2023-03-09T09:23:00Z",
    "content": "Con Android 14 DP2 ya presente para su descarga, las informaciones empiezan a llegar con el despiece de algunas de las APKs en el interior de esta nueva versión. Una de las características más llamat… [+2274 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Elespanol.com"
    },
    "author": "Manuel Ramírez",
    "title": "El Pixel Fold de Google \"cazado\" con imágenes reales, aunque apenas se puede discernir nada",
    "description": "El Google Pixel Fold va a ser otro de los móviles plegables que se va a enfrentar al resto de fabricantes que están pujando fuerte por este tipo de dispositivos que ofrecen otras experiencias.",
    "url": "https://www.elespanol.com/elandroidelibre/noticias-y-novedades/20230309/pixel-fold-google-cazado-imagenes-reales-discernir/747175282_0.html",
    "urlToImage": "https://s1.eestatic.com/2023/01/17/elandroidelibre/moviles-android/734436932_231500476_1200x630.jpg",
    "publishedAt": "2023-03-09T07:42:00Z",
    "content": "El Pixel Fold de Google es otro de los dispositivos que más interés está generando, ya que su formato lo colocaría directamente contra el Samsung Galaxy Z Fold 4. Ahora se han filtrado una serie de i… [+2431 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "David Bernal Raspall",
    "title": "iPhone 15 Pro: se filtra el gran secreto de sus nuevas cámaras",
    "description": "Los rumores sobre los nuevos modelos de iPhone 15 y iPhone 15 Pro no paran de surgir día a día. Mejoras en la batería, cambios en los botones, nuevos colores, chasis de titanio y muchos más cambios son solo algunos ejemplos de todo lo que entra en la conversa…",
    "url": "https://www.applesfera.com/rumores/iphone-15-pro-se-filtra-gran-secreto-sus-nuevas-camaras",
    "urlToImage": "https://i.blogs.es/e9e7d2/hero/840_560.jpeg",
    "publishedAt": "2023-03-09T08:15:42Z",
    "content": "Los rumores sobre los nuevos modelos de iPhone 15 y iPhone 15 Pro no paran de surgir día a día. Mejoras en la batería, cambios en los botones, nuevos colores, chasis de titanio y muchos más cambios s… [+2348 chars]"
    },
    {
"source": {
    "id": null,
    "name": "The A.V. Club"
    },
    "author": "William Hughes",
    "title": "Star Wars mystery show The Acolyte now has a legal mystery of its own",
    "description": "Of all the Star Wars TV shows Disney is constantly cooking up to keep space nerds focused firmly on Disney+, none are more mysterious than The Acolyte, the upcoming series from Russian Doll creator Leslye Headland. Set a century or so before the normal Star W…",
    "url": "https://www.avclub.com/star-wars-mystery-show-the-acolyte-now-has-a-legal-myst-1850205951",
    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/b52d7ce1610801559896aa5e0ed15d27.jpg",
    "publishedAt": "2023-03-09T02:34:00Z",
    "content": "Of all the Star Wars TV shows Disney is constantly cooking up to keep space nerds focused firmly on Disney+, none are more mysterious than The Acolyte, the upcoming series from Russian Dollcreator Le… [+2547 chars]"
    },
    {
"source": {
    "id": null,
    "name": "HYPEBEAST"
    },
    "author": "info@hypebeast.com (Hypebeast)",
    "title": "Supergroup Dinner Party Returns With New Single \"Insane\"",
    "description": "Dinner Party, the supergroup comprised of of Terrace Martin, Robert Glasper, Kamasi Washington and 9th Wonder, is back with their newest single \"Insane.\"Featuring a guest appearance from Ant Clemons, the track is produced by Sounwave and clocks in at just und…",
    "url": "https://hypebeast.com/2023/3/terrace-martin-kamasi-washington-robert-glasper-and-9th-wonder-dinner-party-insane-single-stream",
    "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F03%2Fterrace-martin-kamasi-washington-robert-glasper-and-9th-wonder-dinner-party-insane-single-stream-tw.jpg?w=960&cbr=1&q=90&fit=max",
    "publishedAt": "2023-03-09T08:26:38Z",
    "content": "Dinner Party, the supergroup comprised of of Terrace Martin, Robert Glasper, Kamasi Washington and 9th Wonder, is back with their newest single “Insane.”\r\nFeaturing a guest appearance from Ant Clemon… [+808 chars]"
    },
    {
"source": {
    "id": null,
    "name": "BGR"
    },
    "author": "Andy Meek",
    "title": "Oscars 2023: Here’s where you can stream, rent, or buy all 10 Best Picture nominees",
    "description": "Will this be the year that Netflix finally does it? Once again, the streamer has a Best Picture nominee in contention — at the 2023 …\nThe post Oscars 2023: Here’s where you can stream, rent, or buy all 10 Best Picture nominees appeared first on BGR.",
    "url": "https://bgr.com/entertainment/oscars-2023-heres-where-you-can-stream-rent-or-buy-all-10-best-picture-nominees/",
    "urlToImage": "https://bgr.com/wp-content/uploads/2021/03/Oscars.jpg?quality=82&strip=all",
    "publishedAt": "2023-03-09T01:55:00Z",
    "content": "Will this be the year that Netflix finally does it? Once again, the streamer has a Best Picture nominee in contention — at the 2023 Oscars ceremony, coming this weekend — and, once again, the categor… [+5122 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Faz.net"
    },
    "author": "Roland Lindner",
    "title": "Mastercard-Chef Miebach: „Bargeld ist ein interessanter Wettbewerber“",
    "description": "Der gebürtige Bayer Michael Miebach führt den amerikanischen Kreditkartengiganten Mastercard. Er erklärt, warum sein Konzern höhere Gewinnmargen als Apple hat, beschreibt Bargeld als interessanten Wettbewerber und bestreitet, Teil eines Duopols zu sein.",
    "url": "https://www.faz.net/aktuell/wirtschaft/unternehmen/mastercard-chef-michael-miebach-wir-sehen-keine-anzeichen-fuer-eine-rezession-18733353.html",
    "urlToImage": "https://media0.faz.net/ppmedia/aktuell/846558582/1.8733352/facebook_teaser/michael-miebach.jpg",
    "publishedAt": "2023-03-09T05:28:35Z",
    "content": "Herr Miebach, als Sie zum Vorstandschef von Mastercard ernannt wurden, haben Sie ausdrücklich darauf hingewiesen, Sie würden gerne Michael genannt werden und nicht Mike. Warum?\r\nEin Analyst hat mich … [+3367 chars]"
    },
    {
"source": {
    "id": null,
    "name": "iMore"
    },
    "author": "oliver@monkeymanmedia.com (Oliver Haslam)",
    "title": "Third betas of iOS 16.4, iPadOS 16.4, macOS Ventura 13.3, watchOS 9.4, tvOS 16.4 now available — Here's what's new",
    "description": "Apple has released the third betas of iOS 16.4, iPadOS 16.4, macOS Ventura 13.3, watchOS 9.4, tvOS 16.4 and here's what's new.",
    "url": "https://www.imore.com/iphone/third-betas-of-ios-164-ipados-164-macos-ventura-133-watchos-94-tvos-164-now-available-heres-whats-new",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/Rvj2Af4dm8Mis8mxuj2chV-1200-80.jpg",
    "publishedAt": "2023-03-09T09:08:29Z",
    "content": "Apple's software continues its relentless march through the beta testing programs and now we have the third betas of iOS 16.4, iPadOS 16.4, macOS Ventura 13.3, watchOS 9.4, and tvOS 16.4 available fo… [+3593 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Xatakamovil.com"
    },
    "author": "Álvaro García M.",
    "title": "Los secretos de la 'Decimocuarta' Champions del Real Madrid y otros 35 estrenos de la semana en plataformas",
    "description": "Seas o no forofo del Real Madrid, es indiscutible lo particular que fue su desempeño en la última edición de la Champions League. A base de remontadas se alzó con su decimocuarto título europeo y eso es precisamente lo que relata un nuevo documental de Apple …",
    "url": "https://www.xatakamovil.com/streaming/secretos-decimocuarta-champions-real-madrid-otros-35-estrenos-semana-plataformas",
    "urlToImage": "https://i.blogs.es/a896f2/real-madrid-hasta-el-final/840_560.jpeg",
    "publishedAt": "2023-03-09T08:01:22Z",
    "content": "Seas o no forofo del Real Madrid, es indiscutible lo particular que fue su desempeño en la última edición de la Champions League. A base de remontadas se alzó con su decimocuarto título europeo y eso… [+4265 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Playpcesor.com"
    },
    "author": "Esor Huang",
    "title": "用 ChatGPT 快速將會議語音逐字稿轉成完美文章表格的 5 個技巧",
    "description": "很多時候我會用到「 語音轉文字 」的逐字稿功能，例如開重要會議、一對一訪談，甚至要撰寫部落格文章草稿的時候。我會先錄下語音檔案，或者直接使用語音轉文字的即時轉錄工具（我最常用的是「 Google 即時轉錄 」，以及「 用 Windows 11 語音輸入繁體中文，快速完成會議紀錄...",
    "url": "https://www.playpcesor.com/2023/03/chatgpt-note.html",
    "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2Awy-IpRPqF1Yb33ViGKbiu_gxIvdm_6KNJUyXi772MLRQmBl2Md2hHKIXLFEhREdSZzdv41lGY_h_fU8N_U5axFHSDtqWuk6_lWZ0gyvebdb0thciPlQYdWDa3diOyCU5iw0PLA9pX_S_iQmJE60C0P24nnM3vPu90RBYDLkTdEMMutbmrw/w1200-h630-p-k-no-nu/image-00.png",
    "publishedAt": "2023-03-09T03:24:00Z",
    "content": "很多時候我會用到「語音轉文字」的逐字稿功能，例如開重要會議、一對一訪談，甚至要撰寫部落格文章草稿的時候。我會先錄下語音檔案，或者直接使用語音轉文字的即時轉錄工具（我最常用的是「 Google 即時轉錄」）。\r\n現在很多厲害的語音轉文字工具，不只可以辨識中文，也會自動加上標點符號，基本上一個「看得懂」的逐字稿就產生了。\r\n但是語音轉文字後的逐字稿如果要達到「讀起來通順、精簡、好理解」，就還差了一些… [+4149 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Caschys Blog"
    },
    "author": "Olli",
    "title": "Apple TV+: Drama-Serie „The Last Frontier“ mit Jason Clarke in Auftrag gegeben",
    "description": "Apple wird nicht müde, den hauseigenen Videostreaming-Dienst Apple TV+ mit mehr Inhalten auszustatten. Die Apple Studios haben nun bekannt gegeben, dass man die Drama-Serie „The Last Frontier“ in Auftrag gegeben habe, in der Jason Clarke („Zero Dark Thirty“, …",
    "url": "https://stadt-bremerhaven.de/apple-tv-drama-serie-the-last-frontier-mit-jason-clarke-in-auftrag-gegeben/",
    "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2021/08/apple-tv-plus_.webp",
    "publishedAt": "2023-03-09T08:30:54Z",
    "content": "Apple wird nicht müde, den hauseigenen Videostreaming-Dienst Apple TV+ mit mehr Inhalten auszustatten. Die Apple Studios haben nun bekannt gegeben, dass man die Drama-Serie „The Last Frontier“ in Auf… [+1035 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Frandroid"
    },
    "author": "Cassim Ketfi",
    "title": "Call of Duty sur Nintendo Switch : Microsoft s’explique sur son projet",
    "description": "Pour apaiser l'autorité de la concurrence britannique, Microsoft a pu présenter des compromis concernant la licence Call of Duty. Il est notamment question de la disponibilité du jeu sur Nintendo Switch.",
    "url": "https://www.frandroid.com/marques/microsoft/1631163_call-of-duty-sur-nintendo-switch-microsoft-sexplique-sur-son-projet",
    "urlToImage": "https://images.frandroid.com/wp-content/uploads/2022/10/call-of-duty-modern-warfare-2-mwii-003-preorder-new-002.jpg",
    "publishedAt": "2023-03-09T06:50:42Z",
    "content": "Pour apaiser l'autorité de la concurrence britannique, Microsoft a pu présenter des compromis concernant la licence Call of Duty. Il est notamment question de la disponibilité du jeu sur Nintendo Swi… [+3363 chars]"
    },
    {
"source": {
    "id": "lenta",
    "name": "Lenta"
    },
    "author": "Платон Щукин",
    "title": "Россияне резко сократили расходы на гаджеты",
    "description": "В начале 2023 года рынок потребительского телекоммуникационного оборудования в России оказался значительно скромнее, чем год назад. Граждане выбирают более дешевые гаджеты, но даже в штуках покупают их меньше, чем ранее. Наиболее резкое падение зафиксировано …",
    "url": "https://lenta.ru/news/2023/03/09/gadget/",
    "urlToImage": "https://icdn.lenta.ru/images/2023/03/09/09/20230309091031015/share_384afbb00d2ed36e0577712a1c6464ce.jpg",
    "publishedAt": "2023-03-09T06:19:07Z",
    "content": "2023 , . , , , «».\r\n Holodilnik.ru, 11,4 , , , , 30 . - «F+ tech» , 12 32,5 .\r\n , Holodilnik.ru, 13 ( 2,3 ) 43 ( 50 ). Samsung Apple, , Xiaomi Realme, .\r\n , , . , «.-» , 10 , 30 .\r\n TelecomDaily , 20… [+34 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Srad.jp"
    },
    "author": "nagazou",
    "title": "YouTube、オーバーレイ広告を2023年4月6日以降に廃止",
    "description": "Googleは、YouTube動画内の「オーバーレイ広告」を、4月6日以降に廃止すると発表した。オーバーレイ広告は動画下部を覆い隠すように表示されるタイプのもので、旧式の広告フォーマットであったことから、モバイル版では表示されず、デスクトップ向けのみに配信されていた。このことから視聴者の混乱を招く一因となっていたとされる。また、オーバーレイ広告は視聴者が広告をクリックしたときにのみ報酬が発生していたため、オーバーレイ広告でクリエイターが収益を得るには十分でなかったとし、廃止しても影響が少ない点も廃止となった要因で…",
    "url": "https://it.srad.jp/story/23/03/08/132249/",
    "urlToImage": "https://srad.jp/static/topics/youtube_64.png",
    "publishedAt": "2023-03-09T03:48:00Z",
    "content": "Stay hungry, Stay foolish. -- Steven Paul Jobs"
    },
    {
"source": {
    "id": null,
    "name": "Ifanr.com"
    },
    "author": "杜沅傧",
    "title": "三星，让苹果「又爱又恨」",
    "description": "苹果的去「三星」运动。#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
    "url": "https://www.ifanr.com/1538354",
    "urlToImage": "https://s3.ifanr.com/wp-content/uploads/2023/03/Tim-Cook.jpg",
    "publishedAt": "2023-03-09T01:57:21Z",
    "content": "ZDNet\r\niPhoneiPad \r\nGalaxy iPhone iPhone \r\n 2011 Galaxy iPhone \r\n2018 5.39 \r\n Apple WatchiPhone OLED OLED \r\niPhone AODPromotion\r\niMore\r\n iPhone Jony Ive iPhone \r\niPhone X OLED 2017 OELD \r\nOLED \r\n 200… [+799 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Ifanr.com"
    },
    "author": "何, 嘉昕",
    "title": "早报 | 奇瑞回应要求员工周六上班/AITO 问界宣发更名 HUAWEI 问界/Google 发布史上最大「通才」模型",
    "description": "特斯拉已交付首批 HW4.0 车型\n魅族 20 Pro 真机照曝光#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
    "url": "https://www.ifanr.com/1538496",
    "urlToImage": "https://s3.ifanr.com/wp-content/uploads/2023/03/1-11.jpg",
    "publishedAt": "2023-03-09T00:36:57Z",
    "content": "<ul><li></li><li> AITO </li><li>Google PaLM-E</li><li></li><li> AI </li><li>Google I/O 2023 5 10 </li><li></li><li> Stability AI </li><li> HW4.0 </li><li> 20 Pro </li><li>iPhone Touch ID </li><li> iO… [+1361 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Touchlab.jp"
    },
    "author": "Nakimo",
    "title": "【20%OFF】バッテリーと充電器の1台2役「Anker 511 Power Bank」がセール中",
    "description": "楽天スーパーSALEで、「Anker 511 Power Bank」が20%OFF+ポイントで販売されています。 バッテリーと充電器の1台2役のデバイスで、主な特徴は次のとおり： 携帯しやすいスティック型 USB-C出力 […]\nThe post 【20%OFF】バッテリーと充電器の1台2役「Anker 511 Power Bank」がセール中 first appeared on Touch Lab - タッチ ラボ.©2019 \"Touch Lab - タッチ ラボ\".",
    "url": "http://touchlab.jp/2023/03/anker_511_powerbank_sale_2023mar9/",
    "urlToImage": "http://touchlab.jp/wp-content/uploads/2023/03/anker_511_power_bank_20.jpg",
    "publishedAt": "2023-03-09T00:58:59Z",
    "content": "楽天スーパーSALEで、「Anker 511 Power Bank」が20%OFF+ポイントで販売されています。\n\nバッテリーと充電器の1台2役のデバイスで、主な特徴は次のとおり：\n<ul>\n<li>携帯しやすいスティック型</li>\n<li>USB-C出力ポート</li>\n<li>最大20Wの高出力</li>\n<li>バッテリー容量5,000mAh</li>\n<li>折り畳み式ACプラグ</l… [+952 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Touchlab.jp"
    },
    "author": "Nakimo",
    "title": "【23%OFF】充電はこれひとつ「Anker PowerPort III 2-Port 65W」がセール中",
    "description": "楽天スーパーSALEで、「Anker PowerPort III 2-Port 65W」が23%OFFで販売されています。 この急速充電器の主な特徴は次のとおり： USB-C PD x 2ポート 最大65W (1ポート使 […]\nThe post 【23%OFF】充電はこれひとつ「Anker PowerPort III 2-Port 65W」がセール中 first appeared on Touch Lab - タッチ ラボ.©2019 \"Touch Lab - タッチ ラボ\".",
    "url": "http://touchlab.jp/2023/03/amazon_powerportiii_2port65w_2023mar3/",
    "urlToImage": "http://touchlab.jp/wp-content/uploads/2023/03/anker_powerport3_2port65w_23b.jpg",
    "publishedAt": "2023-03-09T02:23:45Z",
    "content": "楽天スーパーSALEで、「Anker PowerPort III 2-Port 65W」が23%OFFで販売されています。\nこの急速充電器の主な特徴は次のとおり：\n<ul>\n<li>USB-C PD x 2ポート</li>\n<li>最大65W (1ポート使用時)</li>\n<li>GaN(窒化ガリウム)採用</li>\n<li>折り畳み式プラグ</li>\n<li>最長24ヶ月保証</li>\n</u… [+893 chars]"
    },
    {
"source": {
    "id": null,
    "name": "GSMArena.com"
    },
    "author": "Yordan",
    "title": "Canalys: Wearables shipments plummet in Q4 of 2022",
    "description": "Canalys released its report on the global wearables market in Q4 and the entire 2022. The numbers revealed 50 million shipped units between October and December, which was a massive 18% decline - the biggest since data is collected and analyzed.\n\n\n\n\nAll five …",
    "url": "https://www.gsmarena.com/wearables_shipments_q4_full_2022-news-57835.php",
    "urlToImage": "https://fdn.gsmarena.com/imgroot/news/22/08/samsung-galaxy-watch5-india-prices/-952x498w6/gsmarena_000.jpg",
    "publishedAt": "2023-03-09T08:32:01Z",
    "content": "Canalys released its report on the global wearables market in Q4 and the entire 2022. The numbers revealed 50 million shipped units between October and December, which was a massive 18% decline - the… [+879 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Deadline"
    },
    "author": "Baz Bamigboye",
    "title": "Breaking Baz: ‘Ted Lasso’ Striker Phil Dunster Transfers To Season 2 Of Apple TV+ Thriller ‘Surface’; ‘All Quiet On The Western Front’s Edward Berger And Robert Pattinson Have A Coffee",
    "description": "It’s transfer time for Phil Dunster, who has played AFC Richmond’s star striker Jamie Tartt on the Emmy-winning comedy drama Ted Lasso for three seasons. The actor is joining Gugu Mbatha-Raw on Season 2 of her psychological thriller Surface, Breaking Baz can …",
    "url": "https://deadline.com/2023/03/phil-dunster-ted-lasso-surface-casting-robert-pattinson-edward-berger-coffee-breaking-baz-1235283224/",
    "urlToImage": "https://deadline.com/wp-content/uploads/2023/03/breaking-baz-.jpg?w=1024",
    "publishedAt": "2023-03-09T00:44:08Z",
    "content": "It’s transfer time for Phil Dunster, who has played AFC Richmond’s star striker Jamie Tartt on the Emmy-winning comedy drama Ted Lasso for three seasons. The actor is joining Gugu Mbatha-Raw on Seaso… [+4285 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Creative Bloq"
    },
    "author": "Ian Evenden",
    "title": "Acer Swift Edge 16 review: exceptionally light laptop is a pro performer",
    "description": "Outside of the heaviest graphic processing tasks, the Acer Swift Edge 16 is a great choice for creative pros.",
    "url": "https://www.creativebloq.com/reviews/acer-swift-edge-16",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/VAqQcAewa3RDkggBAfxBFW-1200-80.jpg",
    "publishedAt": "2023-03-09T07:01:24Z",
    "content": "Acer Swift Edge 16: Key specs\r\nCPU: AMD Ryzen 7 6800UGPU: AMD Radeon Graphics 680MRAM: 16GBScreen: 16in OLED, 3840x2400Storage: 1TBPorts: 2x USB 4 Type-C, 2x USB 3.2 Gen 1 Type-A, HDMI 2.1, headphone… [+6811 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Marketingdirecto.com"
    },
    "author": "Patricia Aguado",
    "title": "Alquilar equipos informáticos o comprar material reacondicionado, las opciones de reutilización electrónica",
    "description": "Reducir costes, facilitar la flexibilidad y tener una amplia gama de variedad, las ventajas de comprar un equipo reacondicionado o alquilarlo\nLa entrada Alquilar equipos informáticos o comprar material reacondicionado, las opciones de reutilización electrónic…",
    "url": "https://www.marketingdirecto.com/?p=817078",
    "urlToImage": "https://www.marketingdirecto.com/wp-content/uploads/2023/03/Sebrok.jpg",
    "publishedAt": "2023-03-09T08:30:00Z",
    "content": "Reducir costes, facilitar la flexibilidad y tener una amplia gama de variedad, las ventajas de comprar un equipo reacondicionado o alquilarloHoy en día vivimos en un entorno volátil y cambiante, sobr… [+2469 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Deadline"
    },
    "author": "Jesse Whittock",
    "title": "Ex-Netflix Exec Chris Sussman Signs Banijay Deal As Super-Indie’s $59M Investment Drive Continues",
    "description": "Former Netflix UK Director of Scripted Chris Sussman has signed a deal with Banijay UK. Under terms of the first-look agreement, he’ll develop original scripted projects, working with Banijay labels to produce them. This is part of Banijay’s £50M ($59M) UK Gr…",
    "url": "https://deadline.com/2023/03/chris-sussman-signs-banijay-uk-deal-netflix-bbc-studios-1235282610/",
    "urlToImage": "https://deadline.com/wp-content/uploads/2023/03/Chris-Sussman.jpg?w=1024",
    "publishedAt": "2023-03-09T09:30:00Z",
    "content": "Former Netflix UK Director of Scripted Chris Sussman has signed a deal with Banijay UK.\r\nUnder terms of the first-look agreement, he’ll develop original scripted projects, working with Banijay labels… [+1788 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Appbank.net"
    },
    "author": "テクノロジー記事班",
    "title": "Apple WatchでChatGPTを使えるアプリ「watchGPT」音声入力も可能",
    "description": "「Apple Watch」でチャットAI「ChatGPT」を利用できるサードパーティ製アプリ「watchGPT」が登場しています。 *Category:テクノロジー Technology *Source：9to5Mac […]",
    "url": "https://www.appbank.net/2023/03/09/technology/2419337.php",
    "urlToImage": "https://www.appbank.net/wp-content/uploads/2023/03/2023-0308-Apple-Watch-thumb-1.jpeg",
    "publishedAt": "2023-03-09T05:18:28Z",
    "content": "Apple WatchAIChatGPTwatchGPT\r\n*Category:\r\n Technology *Source9to5Mac ,@hiddevdploeg\r\nApple WatchChatGPTwatchGPTChatGPT\r\nwatchGPT\r\nwatchGPTHidde van der PloegApple Wacth\r\nHeres a quick little demo of … [+136 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Appbank.net"
    },
    "author": "テクノロジー記事班",
    "title": "Apple敗れたり！ 落下テストで最新iPhoneがGalaxyに敗北した理由",
    "description": "Appleの「iPhone 14 Pro Max」と、サムスンの最新モデル「Galaxy S23 Ultra」の落下テストを、海外YouTubeチャンネル「PhoneBuff」が実施しています。 *Category:テク […]",
    "url": "https://www.appbank.net/2023/03/09/technology/2419516.php",
    "urlToImage": "https://www.appbank.net/wp-content/uploads/2023/03/2023-0308-iPhone-drop-thumb-1.jpeg",
    "publishedAt": "2023-03-09T09:48:20Z",
    "content": "AppleiPhone 14 Pro MaxGalaxy S23 UltraYouTubePhoneBuff\r\n*Category:\r\n Technology *SourcePhoneBuff ,9to5Mac\r\nPhoneBuffiPhone 14 Pro MaxGalaxy S23 Ultra\r\n1\r\nS23 UltraiPhoneS23 Ultra\r\n2iPhone 14 Pro MaxS… [+152 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Ijunkie.com"
    },
    "author": "Sriansh",
    "title": "Apple to Increase Focus on India with New Sales Strategies",
    "description": "According to a new report by Bloomberg, Apple is reportedly revamping its international sales strategies to place a greater emphasis on India. As a part of this major reshuffle, India will become its own “sales region” at Apple for the first time. This news c…",
    "url": "https://ijunkie.com/apple-to-increase-focus-on-india-with-new-sales-strategies/",
    "urlToImage": "https://ijunkie.com/wp-content/uploads/2022/12/iPhone-14-Pro-Display.jpg",
    "publishedAt": "2023-03-09T08:46:17Z",
    "content": "Apple to Increase Focus on India with New Sales Strategies\r\nAccording to a new report by Bloomberg, Apple is reportedly revamping its international sales strategies to place a greater emphasis on Ind… [+1364 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Nextpit.de"
    },
    "author": "Jade Bryan",
    "title": "Apple iPhone 15 ohne Always-On-Display und LiDAR-Scanner",
    "description": "Das Apple iPhone 15 und iPhone 15 Plus werden möglicherweise nicht mit dem laserbasierten LiDAR-Scanner und einem Always-on-Display ausgestattet sein.(Dies ist ein Teaser - klick hier, um den kompletten Beitrag zu lesen)",
    "url": "https://www.nextpit.de/apple-iphone15-ohne-always-on-display-und-lidar-scanner",
    "urlToImage": "https://fscl01.fonpit.de/userfiles/7687254/image/Apple_iPhone_13_Pro_Max/NextPit_Apple_iPhone_13_Pro_Max_Camera.jpg",
    "publishedAt": "2023-03-09T08:00:00Z",
    "content": "Starke Einschränkungen beim Apple iPhone 15 und 15 Plus\r\nNeueste Entwicklungen deuten darauf hin, dass Apple das iPhone 15 weiter von den Pro-Modellen trennt. In einem Bericht von Barclays heißt es, … [+2257 chars]"
    },
    {
"source": {
    "id": null,
    "name": "DIE WELT"
    },
    "author": "Robin Alexander, Dagmar Rosenfeld",
    "title": "Wenn Sozialdemokraten eine Reise tun – Klingbeil, Mützenich und Pistorius auf Mission",
    "description": "Die Sozialdemokraten suchen eine neue Ostpolitik. Was das für Willy Brandts Erbe bedeutet? Darüber sprechen Dagmar Rosenfeld und Robin Alexander in „Machtwechsel“. Außerdem: Wird der Motor der Ampelregierung mit E-Fuels laufen? Und wann ist laut Grünen und FD…",
    "url": "https://www.welt.de/podcasts/machtwechsel/article244143531/Politik-Podcast-Wenn-Sozialdemokraten-eine-Reise-tun-Klingbeil-Muetzenich-und-Pistorius-auf-Mission.html",
    "urlToImage": "https://img.welt.de/img/podcasts/machtwechsel/mobile234090536/9601350817-ci16x9-w1200/Machtwechsel-Logo-Neu.jpg",
    "publishedAt": "2023-03-09T07:07:15Z",
    "content": "Machtwechsel ist der WELT-Podcast mit Dagmar Rosenfeld und Robin Alexander. Abonnieren unter anderem bei Apple Podcasts, Spotify, Amazon Music, Deezer, Google Podcasts oder per RSS-Feed.\r\nSie interes… [+783 chars]"
    },
    {
"source": {
    "id": null,
    "name": "DIE WELT"
    },
    "author": "Daniel Eckert, Philipp Vetter",
    "title": "Investieren in den Scharia-Staat und Alles auf Anleihen?",
    "description": "In der heutigen Folge „Alles auf Aktien“ sprechen die Finanzjournalisten Daniel Eckert und Philipp Vetter über miese Stimmung bei Adidas und den Krypto-Absturz von Silvergate.",
    "url": "https://www.welt.de/podcasts/alles-auf-aktien/article244185329/Alles-auf-Aktien-Saudi-Arabien-Zwischen-Zukunftsvision-und-Mittelalter.html",
    "urlToImage": "https://img.welt.de/img/podcasts/alles-auf-aktien/mobile233380451/3541350127-ci16x9-w1200/Podcast-Aktien-Eckert-Vetter.jpg",
    "publishedAt": "2023-03-09T04:01:06Z",
    "content": "Außerdem geht es um Brenntag, Continental, ON Semiconductor, AMD, Nvidia, Blackrock, FTX, Saudi Aramco, Al Rajhi Bank, Saudi National Bank, Saudi Basic Industries, Saudi Telecom, Invesco MSCI Saudi A… [+569 chars]"
    },
    {
"source": {
    "id": null,
    "name": "DIE WELT"
    },
    "author": "Nikolaus Doll",
    "title": "Klingbeil sollte Vertrauen gewinnen, nicht verspielen",
    "description": "Bei seiner Reise nach Warschau gesteht SPD-Chef Lars Klingbeil erneut Fehler seiner Partei im Umgang mit Russland ein. In Sachen Sicherheits- und Außenpolitik plädiert er nun für eine Neuaufstellung. Doch sein Plan hat zwei Schönheitsfehler.",
    "url": "https://www.welt.de/debatte/kommentare/article244181151/Polen-Klingbeil-sollte-Vertrauen-gewinnen-nicht-verspielen.html",
    "urlToImage": "https://img.welt.de/img/debatte/kommentare/mobile244182851/5531356157-ci16x9-w1200/Kombo-Doll-Kiingbeil.jpg",
    "publishedAt": "2023-03-09T09:30:00Z",
    "content": "Dass der SPD-Vorsitzende Lars Klingbeil in die Ukraine und nach Polen reist, um dort verloren gegangenes Vertrauen zurückzugewinnen und vor allem in Warschau mit Blick auf das arg ramponierte deutsch… [+2078 chars]"
    },
    {
"source": {
    "id": null,
    "name": "DIE WELT"
    },
    "author": "WELT",
    "title": "Raketenangriffe in weiten Teilen der Ukraine – AKW Saporischschja ohne Strom",
    "description": "In den sozialen Medien gab es etliche Augenzeugenberichte zu heftigen Explosionen, darunter auch in Kiew. Ukrainischen Angaben zufolge ist das AKW Saporischschja von der Stromversorgung abgeschnitten. Die Ukraine plant derweil ihre nächsten Schritte bei der V…",
    "url": "https://www.welt.de/politik/ausland/article244185529/Ukraine-News-Raketenangriffe-in-weiten-Teilen-der-Ukraine-AKW-Saporischschja-ohne-Strom.html",
    "urlToImage": "https://img.welt.de/img/newsticker/dpa_nt/afxline/topthemen/mobile244185515/8981354137-ci16x9-w1200/Angriff-auf-Charkiw.jpg",
    "publishedAt": "2023-03-09T06:23:00Z",
    "content": "In der Nacht zum Donnerstag ist aus zahlreichen Städten in der gesamten Ukraine heftiger Raketenbeschuss gemeldet worden. In sozialen Medien gab es etliche Augenzeugenberichte zu heftigen Explosionen… [+5409 chars]"
    },
    {
"source": {
    "id": null,
    "name": "DIE WELT"
    },
    "author": "Sebastian Dettmers, Swantje Dettmers",
    "title": "Eine Gefahr für Schüler? Warum ChatGPT ins Klassenzimmer gehört",
    "description": "Die Fähigkeiten von ChatGPT sorgen weltweit für Euphorie. Gleichzeitig wächst die Sorge, die Künstliche Intelligenz könnte Schülern langfristig schaden. Doch Anwendungen wie der Chatbot bergen riesige Chancen. Die nächste Generation sollte davon profitieren –…",
    "url": "https://www.welt.de/wirtschaft/karriere/bildung/article243624223/Chat-GPT-Eine-Gefahr-fuer-Schueler-Warum-es-Klassenzimmer-gehoert.html",
    "urlToImage": "https://img.welt.de/img/wirtschaft/webwelt/mobile243663357/7221350727-ci16x9-w1200/Links-Swantje-Dettmers-Mitte-BRAZIL.jpg",
    "publishedAt": "2023-03-09T09:38:42Z",
    "content": "Beim Nutzen von ChatGPT beschleicht einen manchmal das Gefühl, als hätten Computer zu denken angefangen. Schreibe eine Lobrede für den 80. Geburtstag meiner Mutter, Erkläre, wie die Löcher in den Sch… [+5202 chars]"
    },
    {
"source": {
    "id": null,
    "name": "DIE WELT"
    },
    "author": "Carsten Dierig",
    "title": "16 Euro pro Kasten – und trotzdem ist Pils in Deutschland noch zu billig",
    "description": "Die explodierenden Produktionskosten zwingen die Brauer, ihr Bier noch teurer zu verkaufen. Doch gerade diese Preiserhöhungen könnten den Herstellern bald selbst gefährlich werden. Längst ist Bier kein Wachstumsmarkt mehr in Deutschland – und die Brauer gehen…",
    "url": "https://www.welt.de/wirtschaft/article244179933/Bier-16-Euro-pro-Kasten-und-trotzdem-ist-Pils-in-Deutschland-noch-zu-billig.html",
    "urlToImage": "https://img.welt.de/img/wirtschaft/mobile244181817/0301356317-ci16x9-w1200/219266494.jpg",
    "publishedAt": "2023-03-09T06:41:00Z",
    "content": "Jan Niewodniczanski blickt weit in die eigene Vergangenheit zurück, um ein aktuelles Problem zu beschreiben. Als ich vor 39 Jahren hier in Bitburg Abitur gemacht habe, kostete eine Kiste Bier 20 Mark… [+7116 chars]"
    },
    {
"source": {
    "id": "focus",
    "name": "Focus"
    },
    "author": "FOCUS online",
    "title": "Test in zwei Bundesländern - Das müssen Sie tun, damit Sie heute die Warn-Meldung erhalten",
    "description": "Zwei Bundesländer testet zum zweiten Mal den Katastrophenalarm per Handy. Doch nach der bundesweiten Panne im vergangenen Dezember zeigt sich, dass die Betroffenen Vorkehrungen treffen müssen, um die Nachricht zu erhalten. FOCUS online erklärt, was man tun ka…",
    "url": "https://www.focus.de/digital/handy/test-in-zwei-bundeslaendern-das-muessen-sie-tun-damit-sie-heute-die-warn-meldung-erhalten_id_187848464.html",
    "urlToImage": "https://p6.focus.de/img/regional/hamburg/id_180439454/ein-smartphone-zeigt-eine-probewarnung-an..jpg?im=Crop%3D%280%2C170%2C2048%2C1024%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=medium&hash=2b8530e91c4e6a9fdde3903c624402db638e96eb27bff3b73e6c7fadee8ca477",
    "publishedAt": "2023-03-09T08:36:23Z",
    "content": "Zwei Bundesländer testet zum zweiten Mal den Katastrophenalarm per Handy. Doch nach der bundesweiten Panne im vergangenen Dezember zeigt sich, dass die Betroffenen Vorkehrungen treffen müssen, um die… [+5632 chars]"
    },
    {
"source": {
    "id": "focus",
    "name": "Focus"
    },
    "author": "FOCUS online",
    "title": "Handy-Warnung kommt! - Das müssen Sie über den Warntag wissen - so bereiten Sie sich jetzt vor",
    "description": "Vor zwei Jahren gab es beim ersten bundesweiten Warntag etliche Pannen. Heute, am 9. März, soll um 11 Uhr alles besser werden. Dann findet ein erneuter Warntag statt. FOCUS online klärt Sie auf, was Sie wissen müssen und wie sie sich vorbereiten können.",
    "url": "https://www.focus.de/digital/handy/handy-warnung-kommt-das-muessen-sie-ueber-den-warntag-wissen-so-bereiten-sie-sich-jetzt-vor_id_180434874.html",
    "urlToImage": "https://p6.focus.de/img/fotos/id_12416375/bundesweiter-warntag-66606493.jpg?im=Crop%3D%280%2C358%2C4117%2C2058%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=medium&hash=85bc74e40e0f4bbdab3e5db1a92e039a84ddd4239e2931e13b49157284262920",
    "publishedAt": "2023-03-09T08:12:32Z",
    "content": "Vor zwei Jahren gab es beim ersten bundesweiten Warntag etliche Pannen. Heute, am 9. März, soll um 11 Uhr alles besser werden. Dann findet ein erneuter Warntag statt. FOCUS online klärt Sie auf, was … [+6201 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Digiday"
    },
    "author": "Kayleigh Barber",
    "title": "Media Briefing: Why media buyers keep pressing publishers for third-party verification",
    "description": "Media buyers are still hanging their hats on verification firms like Integral Ad Science and DoubleVerify, despite the fact that they're far from perfect.",
    "url": "http://digiday.com/media/media-briefing-why-media-buyers-keep-pressing-publishers-for-third-party-verification/",
    "urlToImage": "https://digiday.com/wp-content/uploads/sites/3/2022/11/transparency-magnifying.jpg",
    "publishedAt": "2023-03-09T05:01:00Z",
    "content": "This week’s Media Briefing polled media buyers on the role that verification firms like IAS and DoubleVerify play in the programmatic market, despite publishers’ lamenting that they get the short end… [+14005 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Nakedcapitalism.com"
    },
    "author": "Yves Smith",
    "title": "How Does JK Galbraith’s The New Industrial State Hold Up After 6 Decades?",
    "description": "How John Galbraith correctly called many developments that have had great political and economic significance, like the decline of unions",
    "url": "https://www.nakedcapitalism.com/2023/03/how-does-jk-galbraiths-the-new-industrial-state-hold-up-after-6-decades.html",
    "urlToImage": "https://www.nakedcapitalism.com/wp-content/uploads/2023/03/00-galbraith.png",
    "publishedAt": "2023-03-09T09:34:28Z",
    "content": "Yves here. It is striking, as Steve Keen describes long-form below, how much the economics profession manages to unlearn, mainly for the purpose of defending capitalist interests. It’s remarkable how… [+16632 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Gizmodo.com"
    },
    "author": "Miguel Jorge",
    "title": "Aparecen cientos de deepfakes sexuales de Emma Watson en anuncios de Facebook e Instagram",
    "description": "Desgraciadamente, hemos hablado y se seguirá haciendo de la otra cara de la moneda que tiene la nueva tecnología alimentada por inteligencia artificial. Las deepfakes son sin duda una de ellas, y un ejemplo lo tenemos esta semana con la aparición de cientos d…",
    "url": "https://es.gizmodo.com/aparecen-cientos-de-deepfakes-sexuales-de-emma-watson-e-1850206458",
    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/9c9f122bd05dc7b199ae51f56d76d718.jpg",
    "publishedAt": "2023-03-09T08:14:00Z",
    "content": "Desgraciadamente, hemos hablado y se seguirá haciendo de la otra cara de la moneda que tiene la nueva tecnología alimentada por inteligencia artificial. Las deepfakes son sin duda una de ellas, y un … [+2306 chars]"
    },
    {
"source": {
    "id": "techradar",
    "name": "TechRadar"
    },
    "author": "John.Loeffler@futurenet.com (John Loeffler)",
    "title": "Sorry Spotify, not everything needs to be TikTok",
    "description": "Spotify has introduced a new redesign of its music streaming service that is a cross between TikTok and Netflix, and it's the lamest thing ever.",
    "url": "https://www.techradar.com/news/sorry-spotify-not-everything-needs-to-be-tiktok",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/PbDEW6UK2sMQgphxx6hvBd-1200-80.jpg",
    "publishedAt": "2023-03-09T06:00:00Z",
    "content": "It makes total sense that Spotify would chase after TikTok. \r\nTikTok is what all the kids are into and so naturally every major brand is out here trying to capture a slice of that highly sought-after… [+3930 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Forbes"
    },
    "author": "Josh Max, Contributor, \n Josh Max, Contributor\n https://www.forbes.com/sites/joshmax/",
    "title": "Compared: 2023 Mitsubishi Outlander PHEV Vs 2023 Lexus GX 460",
    "description": "Mitsubishi and Lexus are miles from each other, historically and aesthetically.  But by cooncidence, I had the 2023 Mitsubishi Outlander PHEV  and the 2023 Lexus GX 460 at the same time for a week’s test each. Here are my findings.",
    "url": "https://www.forbes.com/sites/joshmax/2023/03/08/compared-2023-mitsubishi-outlander-phev-vs-2023-lexus-gx-460/",
    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6406b8c187d230c7a07ba759/0x0.jpg?format=jpg&crop=1439,809,x0,y0,safe&width=1200",
    "publishedAt": "2023-03-09T00:59:06Z",
    "content": "Mitsubishi and Lexus are miles from each other, historically and aesthetically. But by cooncidence, I had the 2023 Mitsubishi Outlander PHEV and the 2023 Lexus GX 460 at the same time for a weeks tes… [+11071 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Hdblog.it"
    },
    "author": "HDblog.it",
    "title": "Apple, il primo modem potrebbe essere realizzato con processo a 3nm da TSMC",
    "description": "La produzione potrebbe partire già a fine anno",
    "url": "https://www.hdblog.it/hardware/articoli/n567347/apple-modem-processo-3nm-tsmc/",
    "urlToImage": "https://hd2.tudocdn.net/1046031?w=1920",
    "publishedAt": "2023-03-09T08:22:00Z",
    "content": "Nelle scorse settimane, al MWC di Barcellona, il CEO di Qualcomm ha più o meno consapevolmente confermato l'anno in cui Apple inizierà ad utilizzare un modem tutto suo. Secondo Cristiano Amon, a part… [+2046 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Hdmotori.it"
    },
    "author": "HDblog.it",
    "title": "Ford Puma ST Powershift, nuova versione con EcoBoost 1.0 da 170 CV",
    "description": "Per quetso modello è disponibile solo un cambio doppia frizione a 7 marce",
    "url": "https://www.hdmotori.it/ford/articoli/n567332/ford-puma-st-powershift-motore-prestazioni/",
    "urlToImage": "https://hd2.tudocdn.net/1085379?w=1920",
    "publishedAt": "2023-03-09T07:40:00Z",
    "content": "Ford ha deciso di ampliare la gamma della Puma introducendo una nuova versione caratterizzata dalla presenza del motore EcoBoost 3 cilindri di un litro di cilindrata con tecnologia Mild Hybrid, porta… [+2006 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Iphoneitalia.com"
    },
    "author": "Giuseppe Migliorino",
    "title": "ChatGPT su Apple Watch con l’app watchGPT",
    "description": "ChatGPT, il chatbot di OpenAI diventato già un fenomeno di culto, arriva su Apple Watch con un'app di terze parti dedicata chiamata watchGPT.",
    "url": "https://www.iphoneitalia.com/806010/chatgpt-apple-watch-watchgpt",
    "urlToImage": "https://static.iphoneitalia.com/wp-content/uploads/2023/03/watchGPT.jpg",
    "publishedAt": "2023-03-09T08:30:27Z",
    "content": "ChatGPT, il chatbot di OpenAI diventato già un fenomeno di culto, arriva su Apple Watch con un’app di terze parti dedicata chiamata watchGPT. Ecco tutti i dettagli.\r\nLa nuova app consente di interagi… [+1381 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Iphoneitalia.com"
    },
    "author": "Giuseppe Migliorino",
    "title": "The Big Door Prize su Apple TV+, trailer e data di lancio",
    "description": "Apple ha condiviso il primo trailer della nuova serie comedy \"The Big Door Prize\". \nLink all'articolo originale: The Big Door Prize su Apple TV+, trailer e data di lancio",
    "url": "https://www.iphoneitalia.com/805989/the-big-door-prize-su-apple-tv-trailer-e-data-di-lancio",
    "urlToImage": "https://static.iphoneitalia.com/wp-content/uploads/2023/03/the-big-door-prize.jpg",
    "publishedAt": "2023-03-09T09:07:52Z",
    "content": "La nuova commedia “The Big Door Prize” arriverà su Apple TV+ il 29 marzo.\r\nThe Big Door Prize è una serie comedy con protagonista Chris O’Dowd su una misteriosa macchina in una piccola città.\r\nBasato… [+1037 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Iphoneitalia.com"
    },
    "author": "Giuseppe Migliorino",
    "title": "Ecco come l’utilizzo di iPhone, iPad e Mac varia in base all’età",
    "description": "Come cambia l'età degli utenti Apple in base ai dispositivi in loro possesso? \nLink all'articolo originale: Ecco come l’utilizzo di iPhone, iPad e Mac varia in base all’età",
    "url": "https://www.iphoneitalia.com/806004/utilizzo-iphone-ipad-mac-eta",
    "urlToImage": "https://static.iphoneitalia.com/wp-content/uploads/2023/03/disposaitivi-apple.jpg",
    "publishedAt": "2023-03-09T07:33:12Z",
    "content": "Un nuovo studio condotto da CIRP ci mostra come l’età degli utenti influisce sulla probabilità di utilizzare un iPhone, un iPad o un Mac.\r\nCIRP ha deciso di approfondire il ruolo dell’età nell’utiliz… [+862 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "pymnts.com",
    "title": "Visa: Digital-First Governments Use Payments Data to Improve Policy and Financial Access",
    "description": "Three years ago, we got a sense of how governments could leverage technology in times of crisis — using digital pipes to get aid to people who needed stimulus payments and assistance the most. As the pandemic hit home across the globe, government agencies dis…",
    "url": "https://biztoc.com/x/a6047ea5ee3c3bbf",
    "urlToImage": "https://c.biztoc.com/p/a6047ea5ee3c3bbf/og.webp",
    "publishedAt": "2023-03-09T09:22:06Z",
    "content": "Three years ago, we got a sense of how governments could leverage technology in times of crisis using digital pipes to get aid to people who needed stimulus payments and assistance the most. As the p… [+306 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "cnbc.com",
    "title": "Current sweet spot in equities may come from picking up 'quality' stocks",
    "description": "The current sweet spot in equities? It may be \"quality.\" Fed Chair Jerome Powell's message that rate hikes may come faster and stay higher for longer is leaving equity investors scrambling for investments that could weather the storm. For investors who don't …",
    "url": "https://biztoc.com/x/6792dcdd2118a58d",
    "urlToImage": "https://c.biztoc.com/p/6792dcdd2118a58d/og.webp",
    "publishedAt": "2023-03-09T00:20:08Z",
    "content": "The current sweet spot in equities? It may be \"quality.\" Fed Chair Jerome Powell's message that rate hikes may come faster and stay higher for longer is leaving equity investors scrambling for invest… [+303 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Tinhte.vn"
    },
    "author": "giahuy0308@outlook.com (Pnghuy), Pnghuy",
    "title": "Cách làm hình nền memoji cho iPhone & Android trong 1 phút",
    "description": "Apple giới thiệu hình nền emoji cho iPhone kể từ iOS 16, nhưng đó là emoji chứ không phải memoji, anh em còn nhớ memoji không. Một trang web là memotify.com sẽ giúp anh em tạo hình nền với tối đa 6 memoji, 3 kiểu và rất nhiều màu sắc.",
    "url": "https://tinhte.vn/thread/cach-lam-hinh-nen-memoji-cho-iphone-android-trong-1-phut.3641979/",
    "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2023/03/6351353_Cover_hinhnen_memoji_Android_iPhone_tinhte_pnghuy-3.jpg",
    "publishedAt": "2023-03-09T02:50:30Z",
    "content": "Apple gii thiu hình nn emoji cho iPhone k t iOS 16, nhng ó là emoji ch không phi memoji, anh em còn nh memoji không. Mt trang web là memotify.com s giúp anh em to hình nn vi ti a 6 memoji, 3 kiu và r… [+964 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Tinhte.vn"
    },
    "author": "cuhiep+3@gmail.com (cuhiep), cuhiep",
    "title": "Mong muốn có một bản Galaxy S Ultra nhỏ hơn: 6\"3 là đẹp",
    "description": "Galaxy S23 Ultra là chiếc điện thoại rất tuyệt vời nhưng nó lại quá to và thô. Ước gì có một bản nhỏ hơn một chút, khoảng 6\"3 nhưng mà có tất cả những gì mà S23 Ultra có thì tuyệt vời. Samsung trước đây từng làm một cặp máy với cùng thiết kế và…",
    "url": "https://tinhte.vn/thread/mong-muon-co-mot-ban-galaxy-s-ultra-nho-hon-6-3-la-dep.3636184/",
    "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2023/03/6353033_Samsung-Galaxy-Note-10.jpg",
    "publishedAt": "2023-03-09T03:22:06Z",
    "content": "Theo s liu chúng ta thy thì th trng Vit Nam nhng chic in thoi to nht, t nht luôn c chn mua nhiu nht. Tuy nhiên nu xét trên s liu toàn cu thì thì chic smartphone bán chy nht nhiu nm nay là chic iPhone… [+377 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Neowin"
    },
    "author": "Aditya Tiwari",
    "title": "India to become Apple's next big focus by turning it into a new sales region",
    "description": "Apple is working to turn India into a separate sales region and increase its focus on the market. As per reports, Apple is doing management reshuffling to appoint a new head for the region. Read more...",
    "url": "https://www.neowin.net/news/india-to-become-apples-next-big-focus-by-turning-it-into-a-new-sales-region/",
    "urlToImage": "https://cdn.neowin.com/news/images/uploaded/2023/03/1678350797_apple_store_front_story.jpg",
    "publishedAt": "2023-03-09T08:52:01Z",
    "content": "via BEP (Pixabay)\r\nApple might soon increase its focus on India and turn it into a separate sales region. And to that end, the iPhone-maker is doing management changes to its international businesses… [+1625 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Netafull.net"
    },
    "author": "コグレマサト",
    "title": "【iPad整備済製品】iPad・10.5インチiPad Pro・iPad Air・iPad mini 5【2023年3月9日】",
    "description": "Apple公式サイトの「iPad整備済製品」の情報です。 Appleの整備済み品は問題があって返品された商品などを整備し、テスト後認定されたものです。1年間の特別保証が付いています。 最新の在庫情報は「Apple整備済製...\n投稿 【iPad整備済製品】iPad・10.5インチiPad Pro・iPad Air・iPad mini 5【2023年3月9日】 は ネタフル に最初に表示されました。",
    "url": "https://netafull.net/apple-refurbished/0126495.html",
    "urlToImage": "https://netafull.net/wp-content/uploads/2022/12/apple-refurbished-ipad.jpg",
    "publishedAt": "2023-03-09T06:30:00Z",
    "content": "AppleiPad\r\nApple1\r\nApple\r\nAmazonApple\r\niPad mini 5 Wi-Fi 64GB – []\r\n50,780\r\niPad mini 5 Wi-Fi 64GB – []\r\n50,780\r\niPad Wi-Fi 128GB – 8[]\r\n50,800\r\niPad Wi-Fi 128GB – 8[]\r\n50,800\r\niPad Wi-Fi 128GB – 8[]… [+816 chars]"
    },
    {
"source": {
    "id": null,
    "name": "3dnews.ru"
    },
    "author": null,
    "title": "16 российских банков работают над NFC-стикерами, которые вернут бесконтактную оплату на iPhone",
    "description": "Хотя в условиях санкций некоторые из крупнейших российских банков, включая «Сбер» и «Тинькофф», уже начали внедрять оплату NFC-стикерами, отдельные банки лишь рассматривают использование такого решения. По данным «Известий», в Росбанке, банке «Дом.РФ» и Экспо…",
    "url": "https://3dnews.ru/1083107/eshchyo-tri-rossiyskih-banka-vnedryat-beskontaktnuyu-oplatu-stikerami-do-avgusta",
    "urlToImage": "https://3dnews.ru/assets/external/illustrations/2023/03/09/1083107/sm.hands185330260720.800.jpg",
    "publishedAt": "2023-03-09T08:03:00Z",
    "content": ", «» «», NFC-, . «», , «.» - , 16 .\r\n: bssmadeit/unsplash.com\r\n, NFC- «», — iPhone, Apple Apple Pay, NFC iPhone . Android Google Pay — NFC , Play .\r\n , «.» , II 2023 . , - . «», , -, «» « », , , «» «… [+140 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Sspai.com"
    },
    "author": "少数派编辑部",
    "title": "派早报：Apple 推出新款爱马仕配件、松下发布家用机器人等",
    "description": "Sonos 确认部分机型将支持 Apple Music 空间音频、Reddit 计划推出移动端大版本更新等。查看全文",
    "url": "https://sspai.com/post/78759",
    "urlToImage": "https://cdn.sspai.com/09/03/2023/article/0358b776-f58e-d806-ab0c-d99993d8f0a3.jpg",
    "publishedAt": "2023-03-09T00:41:12Z",
    "content": "Apple \r\n3 8 Apple Apple Watch AirTag 6 Apple Watch Hermès - 41 Orange / Blanc Swift Casaque Double Tour 4899 2399 3999 \r\n Apple \r\nNICOBO\r\n3 8 NICOBO 5 16 NICOBO \r\nSonos Apple Music \r\n3 8 Sonos 3 28 A… [+314 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Publico.pt"
    },
    "author": "publico@publico.pt, publico@publico.pt, publico@publico.pt",
    "title": "P24. O que levou a IL a rasgar o acordo parlamentar nos Açores? E haverá eleições?",
    "description": "Neste P24 ouvimos o correspondente do PÚBLICO nos Açores, Rui Pedro Paiva.",
    "url": "https://www.publico.pt/2023/03/09/politica/noticia/p24-levou-il-rasgar-acordo-parlamentar-acores-havera-eleicoes-2041682",
    "urlToImage": "https://imagens.publico.pt/imagens.aspx/1786154?tp=UH&db=IMAGENS&type=JPG&share=1&o=BarraFacebook_Podcasts.png",
    "publishedAt": "2023-03-09T06:58:00Z",
    "content": "Durante o plenário da assembleia regional desta quarta-feira, a Iniciativa Liberal (IL) rompeu o acordo de incidência parlamentar que suporta o Governo dos Açores, apanhando de surpresa PSD, CDS-PP e… [+609 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Cult of Mac"
    },
    "author": "Rajesh Pandey",
    "title": "Apple makes organizational changes to focus more on India",
    "description": "Apple is making internal management changes to further focus on India. It is also making the country its own sales region.\n(via Cult of Mac - Tech and culture through an Apple lens)",
    "url": "https://www.cultofmac.com/808605/apple-makes-organizational-changes-focus-india/",
    "urlToImage": "https://www.cultofmac.com/wp-content/uploads/2022/12/India-iPhone-14-Pro.jpg",
    "publishedAt": "2023-03-09T05:49:59Z",
    "content": "Apple is making internal management changes to further focus on India. And for the first time ever, the company will make India its own sales region, highlighting its growing importance.\r\nThe South A… [+1937 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Cult of Mac"
    },
    "author": "Ed Hardy",
    "title": "Apple TV+ awards The Big Door Prize trailer to viewers",
    "description": "The Big Door Prize tells the story of a small town that is changed forever when a mysterious machine reveals each resident’s true potential.\n(via Cult of Mac - Tech and culture through an Apple lens)",
    "url": "https://www.cultofmac.com/808583/the-big-door-prize-trailer-apple-tv-plus/",
    "urlToImage": "https://www.cultofmac.com/wp-content/uploads/2023/03/Big-Door-Prize-poster-Apple-TV-plus.jpg",
    "publishedAt": "2023-03-09T00:15:26Z",
    "content": "The next comedy premiering on Apple TV+ is The Big Door Prize. The series tells the story of a small town that is changed forever when a mysterious machine appears in the general store, promising to … [+1508 chars]"
    },
    {
"source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": null,
    "title": "Apple to shake up international businesses’ management to focus on India - The Indian Express",
    "description": "Apple to shake up international businesses’ management to focus on India  The Indian Express",
    "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMikgFodHRwczovL2luZGlhbmV4cHJlc3MuY29tL2FydGljbGUvdGVjaG5vbG9neS90ZWNoLW5ld3MtdGVjaG5vbG9neS9hcHBsZS10by1zaGFrZS11cC1pbnRlcm5hdGlvbmFsLWJ1c2luZXNzZXMtbWFuYWdlbWVudC10by1mb2N1cy1vbi1pbmRpYS04NDg2Mzk4L9IBlwFodHRwczovL2luZGlhbmV4cHJlc3MuY29tL2FydGljbGUvdGVjaG5vbG9neS90ZWNoLW5ld3MtdGVjaG5vbG9neS9hcHBsZS10by1zaGFrZS11cC1pbnRlcm5hdGlvbmFsLWJ1c2luZXNzZXMtbWFuYWdlbWVudC10by1mb2N1cy1vbi1pbmRpYS04NDg2Mzk4L2xpdGUv?oc%3D5&gl=FR&hl=en-US&pc=n&src=1",
    "urlToImage": null,
    "publishedAt": "2023-03-09T03:39:52Z",
    "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Elespanol.com"
    },
    "author": "C�sar Rebolledo",
    "title": "FREE FIRE | Códigos de hoy jueves 9 de marzo de 2023 - Recompensas gratis",
    "description": "<!--cache-->Estos son todos los códigos gratis de Garena Free Fire que podrás canjear hoy, ueves 9 de marzo de 2023. Consigue recompensas como skins, diamantes y mucho más.<!--aa--->El éxito para móviles Android e iOS, Garena Free Fire, ha recibido nuevos cód…",
    "url": "https://vandal.elespanol.com/noticia/1350760624/free-fire-codigos-de-hoy-jueves-9-de-marzo-de-2023-recompensas-gratis/",
    "urlToImage": "https://media.vandal.net/i/ivandal/1200x630/3-2023/202339919282_1.jpg",
    "publishedAt": "2023-03-09T08:20:00Z",
    "content": "El xito para mviles Android e iOS, Garena Free Fire, ha recibido nuevos cdigos diarios para hoy jueves 9 de marzo de 2023. Los jugadores pueden canjear estos cdigos para recibir recompensas variadas … [+2192 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Taisy0.com"
    },
    "author": "taisy0",
    "title": "Apple、｢Safari Technology Preview 165｣をリリース",
    "description": "本日、Appleが、「Safari Technology Preview 165」をリリースしています。 ｢Safari Technology Preview｣は、｢Safari｣に将来的に導入される機能の早期の評価を目 ...",
    "url": "https://taisy0.com/2023/03/09/169449.html",
    "urlToImage": "https://taisy0.com/wp-content/uploads/2022/04/SafariTechologyPreview2022.jpg",
    "publishedAt": "2023-03-09T01:39:45Z",
    "content": "AppleSafari Technology Preview 165\r\nSafari Technology PreviewSafarimacOS VenturaSafari 16macOS MontereymacOS Ventura\r\nWeb InspectorCSSJavaScriptWebWebCryptoWebGLWeb APIWeb Extensions\r\nvia MacRumors"
    },
    {
"source": {
    "id": null,
    "name": "Macitynet.it"
    },
    "author": "Mauro Notarianni",
    "title": "Apple finanzia un’etichetta musicale multicanale",
    "description": "Cupertino sta sostenendo finanziariamente una startup musicale lanciata da u ex dirigente di Apple Music.\n- su macitynet.it Apple finanzia un’etichetta musicale multicanale",
    "url": "https://www.macitynet.it/apple-appoggia-finanziariamente-gamma-startup-musicale/",
    "urlToImage": "https://www.macitynet.it/wp-content/uploads/2023/03/Gamma.jpg",
    "publishedAt": "2023-03-09T08:59:57Z",
    "content": "Apple sta sostenendo finanziariamente una startup musicale lanciata da un suo ex dirigente.\r\nLa startup in questione si chiama “Gamma” ed è nata da una idea di Larry Jackson, ex Global Creative Direc… [+2243 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Macitynet.it"
    },
    "author": "Emiliano Contarino",
    "title": "Spotify cambia volto e somiglia tanto a TikTok",
    "description": "Spotify debutta con il suo feed musicale stile TikTok per trovare canzoni e autori nuovi adatti ai propri gusti: novità anche per i podcast\n- su macitynet.it Spotify cambia volto e somiglia tanto a TikTok",
    "url": "https://www.macitynet.it/spotify-feed-musicale-stile-tiktok/",
    "urlToImage": "https://www.macitynet.it/wp-content/uploads/2023/03/spotify-schede-tik-tok-2.jpg",
    "publishedAt": "2023-03-09T09:29:01Z",
    "content": "Il feed video verticale in stile TikTok ha invaso molte delle app social più utilizzate e adesso arriva ufficialmente anche su Spotify, dopo essere stato in beta test l’anno scorso: in questo modo la… [+2470 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Investor's Business Daily"
    },
    "author": "Investor's Business Daily",
    "title": "Dow Jones Futures Fall: Market Rally Stuck At Key Levels; Tesla Extends Slide",
    "description": "Chip stocks are a bright spot, but Fed rate fears rising.",
    "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-market-rally-stuck-at-key-levels-tesla-extends-slide/",
    "urlToImage": "https://www.investors.com/wp-content/uploads/2021/01/Stock-Tesla-modelY-01-adobe.jpg",
    "publishedAt": "2023-03-09T03:09:33Z",
    "content": "Dow Jones futures fell slightly overnight, along with S&amp;P 500 futures and Nasdaq futures. Crypto financial firm Silvergate Capital (SI) announced late Wednesday that it's shutting down. American … [+10031 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Cineblog.it"
    },
    "author": "Pietro Ferraro",
    "title": "Ghosted: trailer e anticipazioni della commedia d’azione di Apple TV+ con Chris Evans e Ana de Armas",
    "description": "Tutto quello che c'è da sapere su \"Ghosted\", la commedia d'azione a tinte romance con Chris Evans e Ana de Armas disponibile dal 21 aprile su Apple TV+.",
    "url": "https://www.cineblog.it/post/ghosted-trailer-chris-evans-ana-de-armas",
    "urlToImage": "https://www.blogo.it/app/uploads/sites/3/2023/03/ghosted-trailer-e-anticipazioni-della-commedia-dazione-di-apple-tv-con-chris-evans-e-ama-de-armas-3.png",
    "publishedAt": "2023-03-09T09:23:43Z",
    "content": "Dal 21 aprile disponibile su AppleTV+ Ghosted, la commedia dazione a tinte romance dallacclamato regista Dexter Fletcher (Eddie the Eagle, Rocketman). Nel trailer un mix tra Innocenti bugie di James … [+4059 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Hwupgrade.it"
    },
    "author": null,
    "title": "I super prezzi di Amazon: sconti mai visti su AirPods Pro e iPhone 14, ma occhio anche agli aspirapolvere, portatili a partire da 399, SSD, tablet, bici elettriche, Bluetti e molto altro",
    "description": "Abbiamo trovato tante offerte interessanti oggi su Amazon. Sconti mai visti su alcuni dispositivi Apple, anche di recentissima introduzione sul mercato. Ma anche le categorie degli aspirapolvere smart, dei portatili (gaming e non), delle bici elettriche e del…",
    "url": "https://www.hwupgrade.it/news/telefonia/i-super-prezzi-di-amazon-sconti-mai-visti-su-airpods-pro-e-iphone-14-ma-occhio-anche-agli-aspirapolvere-portatili-a-partire-da-399-ssd-tablet-bici-elettriche-bluetti-e-molto-altro_114776.html",
    "urlToImage": "https://www.hwupgrade.it/i/n/airpodspro_secgen_720.jpg",
    "publishedAt": "2023-03-09T08:27:37Z",
    "content": "Sono ora al prezzo minimo storico gli iconici AirPods Pro di seconda generazione. Se si vuole spendere meno, rimangono molto validi anche gli AirPods di base, anche in questo caso con un taglio di pr… [+9333 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Vedomosti.ru"
    },
    "author": null,
    "title": "«Известия» узнали о сокращении поставок «серых» смартфонов в Россию",
    "description": "",
    "url": "https://www.vedomosti.ru/business/news/2023/03/09/965746-o-prekraschenii-postavok-serih-smartfonov",
    "urlToImage": "https://sharing.vedomosti.ru/1678346674/vedomosti.ru/business/news/2023/03/09/965746-o-prekraschenii-postavok-serih-smartfonov.jpg",
    "publishedAt": "2023-03-09T07:24:16Z",
    "content": ", - , 3000-4000 . , , , . , .\r\nMobile Research Group , . , () , . \r\n, « » . «» : 2022 . 7,8 ( 30% ) 1,6 2021 . ( 5% ).\r\n. 2 2022 . Apple , Apple Pay . LG Samsung. , - Xiaomi, Huawei Oppo.\r\n«», 2022 .… [+121 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Macotakara.jp"
    },
    "author": "danbo",
    "title": "Apple、バグを修正したデベロッパー向けアプリ「Apple Developer 10.3」を配布開始",
    "description": "Apple Developer\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- テキスト -->\n\nAppleが、Mac/iPhone/iPad/iMessage/Apple Watch/Apple TV用デベロッパー向けアプリ「Apple Developer 10.3」を、App Storeにて無料配布を開始しています。\n\nmacOS 12.0以降、iOS 15.0、iPadOS 15.0以降のシステム環境に対応しています。",
    "url": "https://www.macotakara.jp/etc/category-60/entry-44443.html",
    "urlToImage": "https://www.macotakara.jp/archives/001/202006/50e3c13d3281c30caf5aa7ff6d0b38d8b845ba9d7feb6f670621e22c855d814d.png",
    "publishedAt": "2023-03-09T00:55:21Z",
    "content": "AppleMac/iPhone/iPad/iMessage/Apple Watch/Apple TVApple Developer 10.3App Store\r\nmacOS 12.0iOS 15.0iPadOS 15.0"
    },
    {
"source": {
    "id": null,
    "name": "Macotakara.jp"
    },
    "author": "danbo",
    "title": "Macの整備済商品 商品追加（2023/3/09）",
    "description": "<!-- テキスト -->\n\nApple.com/jpが、Apple認定の整備済製品で、Mac整備済み製品として、商品の追加を行っています。\n\n30,000円以上購入でオリコApple ショッピングローンが24回払いまで金利０%で利用出来ます。\n\nペイディあと払いプランApple専用は利用できません。\n\n整備品情報はメールマガジンでもお知らせしています。\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- テキスト -->\n\n<ul>\n<li>Mac…",
    "url": "https://www.macotakara.jp/sale/entry-44444.html",
    "urlToImage": "https://www.macotakara.jp/archives/001/201611/e50abd4ca06f3be852fb38a4ccd86d22c0d6d09e8888086e9ec45e0db1919748.jpg",
    "publishedAt": "2023-03-09T03:35:38Z",
    "content": "Apple.com/jpAppleMac\r\n30,000Apple 24%\r\nApple\r\n<ul><li>Mac Studio (2022)/M1 Ultra/20Core CPU/64CoreGPU/128GB/8TB SSD950,800</li><li>Mac Studio (2022)/M1 Ultra/20Core CPU/64CoreGPU/64GB/2TB SSD668,800<… [+8749 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Unwire.hk"
    },
    "author": "唐美鳳",
    "title": "無緣成為 iPhone 15 供應商 京東方被指將生產 iPhone SE 4 屏幕",
    "description": "傳聞指今年稍後推出的 iPhone 15 系列，屏幕會全線配備動態島功能，屏幕中間開孔成為了必須。中國面板生產商京東方被指產品質量有問題，開孔位置有漏光情況，故此其 iPhone 15 面板供應商資格被 Apple 褫奪，剩下韓國的 Samsung Display 和 LG Display 負責供應。\nThe post 無緣成為 iPhone 15 供應商 京東方被指將生產 iPhone SE 4 屏幕 appeared first on 香港 unwire.hk 玩生活．樂科技.",
    "url": "https://unwire.hk/2023/03/09/iphone-se-4-oled-panel-supplier-boe/mobile-phone/",
    "urlToImage": "https://cdn.unwire.hk/wp-content/uploads/2023/03/01-8.png",
    "publishedAt": "2023-03-09T03:28:25Z",
    "content": "iPhone 15 iPhone 15 Apple Samsung Display LG Display \r\n iPhone 15 Apple iPhone SE iPhone SE iPhone 14 OLED Face ID LCD Home Touch ID\r\n iPhone 14 Apple 6.1 LTPS TFT Pro LTPO iPhone SE 40 Pro 60 \r\nmacr… [+48 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Unwire.hk"
    },
    "author": "唐美鳳",
    "title": "2022 智能手機銷售十大 iPhone 佔八席剩餘兩款 Galaxy 入門機",
    "description": "去年智能手機市場 10 款最暢銷的產品中，有 8 款來自 Apple，就連 2020 年發表的 iPhone 12 亦榜上有名，這個結果讓人相當意外。根據市場調查機構 Counterpoint Research 的 2022 智能手機銷售報告，十大暢銷手機中只有兩款並非 iPhone，而是 Samsung 的產品。\nThe post 2022 智能手機銷售十大 iPhone 佔八席剩餘兩款 Galaxy 入門機 appeared first on 香港 unwire.hk 玩生活．樂科技.",
    "url": "https://unwire.hk/2023/03/09/counterpoint-research-top-smartphones-global-2022/mobile-phone/",
    "urlToImage": "https://cdn.unwire.hk/wp-content/uploads/2023/03/04-8.png",
    "publishedAt": "2023-03-09T03:28:31Z",
    "content": "10 8 Apple 2020 iPhone 12 Counterpoint Research 2022 iPhone Samsung \r\n iPhone 13 5.0% iPhone 13 Pro iPhone 14 Pro Max 2.6% 1.7%iPhone 13 ProiPhone 12iPhone 14iPhone 14 Pro iPhone SE 2022 8 iPhone 16.… [+231 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Iphones.ru"
    },
    "author": "Артём Баусов",
    "title": "Bloomberg: Apple начала уделять больше внимания рынку Индии",
    "description": "Bloomberg сообщает, что Apple пересмотрела свою стратегию мировых продаж. Теперь компания уделяет больше внимания рынку Индии. Это случилось после того, как вице-президент, отвечающий за Индию, Ближний Восток, Средиземноморье, Восточную Европу и Африку – Хьюг…",
    "url": "https://www.iphones.ru/iNotes/bloomberg-apple-nachala-udelyat-bolshe-vnimaniya-rynku-indii-03-09-2023",
    "urlToImage": "https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2023%2F03%2FIMG_9096.jpeg",
    "publishedAt": "2023-03-09T05:54:18Z",
    "content": "Bloomberg , Apple .\r\n . , -, , , , – – . , Apple ."
    },
    {
"source": {
    "id": null,
    "name": "Iphones.ru"
    },
    "author": "Артём Суровцев",
    "title": "Как открыть карту иностранного банка онлайн за 10 минут, чтобы платить в заграничных магазинах и сервисах",
    "description": "Как открыть турецкую карту Oldubil в России и правильно пополнять её счет",
    "url": "https://www.iphones.ru/iNotes/kak-otkryt-virtualnuyu-zagranichnuyu-kartu-dlya-oplaty-igr-prilozheniy-i-servisov-03-08-2023",
    "urlToImage": "https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2023%2F03%2F210220232020037094f0123.jpg",
    "publishedAt": "2023-03-09T09:40:57Z",
    "content": "Apple . , Apple, – .\r\n , . , PlayStation Store, Xbox Store, Steam, App Store. \r\n , Apple Pay ( ), . \r\n iPhone\r\n1.OlduBil App Store. QIWI.\r\n , VPN.\r\n2. . . \r\n3. . , .\r\n4.My Wallet, . \r\n5.View Card Inf… [+1049 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Iphones.ru"
    },
    "author": "Артём Баусов",
    "title": "Продажи техники в России снизились на 40% в деньгах. Покупатели стали больше экономить",
    "description": "В штуках падение ниже, но ситуация несильно лучше.",
    "url": "https://www.iphones.ru/iNotes/prodazhi-tehniki-v-rossii-snizilis-na-40-v-dengah-pokupateli-stali-bolshe-ekonomit-03-09-2023",
    "urlToImage": "https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2023%2F03%2FIMG_9094-1.jpeg",
    "publishedAt": "2023-03-09T05:48:04Z",
    "content": ", 8 2023 .\r\n, 11-12% 32-40% . - «F+ tech» , . \r\n 13%, 2,3 , 43%, 50 , Holodilnik.ru. Samsung Apple 35% 18% . , 2022 - , .\r\n Xiaomi, 33% . []"
    },
    {
"source": {
    "id": null,
    "name": "Expansion.com"
    },
    "author": "expansion.com",
    "title": "La Primera de Expansión sobre Banca March, Santander y El Corte Inglés y Ferrovial",
    "description": "En la agenda del día, estaremos atentos a la reunión entre la vicepresidenta y ministra de Asuntos Económicos, Nadia Calviño, con las patronales bancarias. En Estados Unidos, Joe",
    "url": "https://www.expansion.com/podcasts/2023/03/09/64097d8ee5fdea4a148b460a.html",
    "urlToImage": "https://phantom-expansion.unidadeditorial.es/23733f7d6d088a75bd548b080fe3b8a6/f/jpg/assets/multimedia/imagenes/2023/03/09/16783414671255.jpg",
    "publishedAt": "2023-03-09T06:47:43Z",
    "content": "Este jueves les contamos que Banca March quiere crecer un 40% en banca privada. Además veremos que El Corte Inglés y Santander renegocian su alianza y que Londres golpea a Ferrovial al bajar las tari… [+680 chars]"
    },
    {
"source": {
    "id": null,
    "name": "AdExchanger"
    },
    "author": "AdExchanger",
    "title": "TikTok Is Getting Serious About Search; A Complex Fracture, But Not The Bad Kind",
    "description": "Here’s today’s AdExchanger.com news round-up… Want it by email? Sign up here. The Great Search TikTok has made waves because of its organic traction as a new kind of search\nThe post TikTok Is Getting Serious About Search; A Complex Fracture, But Not The Bad K…",
    "url": "http://www.adexchanger.com/ad-exchange-news/thursday-09032023/",
    "urlToImage": "https://www.adexchanger.com/wp-content/uploads/2019/05/revised.HI_.RES_.prom_.cartoon.jpg",
    "publishedAt": "2023-03-09T05:03:07Z",
    "content": "Heres todays AdExchanger.com news round-up Want it by email? Sign up here.\r\nThe Great Search\r\nTikTok has made waves because of its organic traction as a new kind of search engine. People use it to lo… [+4221 chars]"
    },
    {
"source": {
    "id": null,
    "name": "iphone-ticker.de › iPhone-News seit 2007"
    },
    "author": "Nicolas",
    "title": "watchGPT für Apple Watch: ChatGPT am Handgelenk",
    "description": "Nachdem sich viele iPhone-Anwender die Funktionen des KI-Sprachchats ChatGPT bereits mit spezialisierten Kurzbefehlen auf ihre Geräte geholt haben, wächst die Anzahl der im App Store verfügbaren Anwendungen, die den komfortablen Zugriff auf das OpenAI-Projekt…",
    "url": "https://www.iphone-ticker.de/watchgpt-fuer-apple-watch-chatgpt-am-handgelenk-208775/",
    "urlToImage": "https://images.iphone-ticker.de/wp-content/uploads/2023/03/watch-gpt-feature.jpg",
    "publishedAt": "2023-03-09T06:58:10Z",
    "content": "Nachdem sich viele iPhone-Anwender die Funktionen des KI-Sprachchats ChatGPT bereits mit spezialisierten Kurzbefehlen auf ihre Geräte geholt haben, wächst die Anzahl der im App Store verfügbaren Anwe… [+1666 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Zive.cz"
    },
    "author": "Adam Kos",
    "title": "Nejlepší aplikace pro tento týden: Editace a podpis PDF, tvorba vizitek a zábavná matematika",
    "description": "V marketech najdete množství titulů, ale jak objevit ty kvalitní? • Každý týden je vybírá Apple, ale řada z nich má i verzi pro Android.\n• Výsledkem jsou kolekce těch nejlepších aplikací svého druhu.",
    "url": "https://mobilmania.zive.cz/clanky/nejlepsi-aplikace-pro-tento-tyden-editace-a-podpis-pdf-tvorba-vizitek-a-zabavna-matematika/sc-3-a-1357256/default.aspx",
    "urlToImage": "https://mobilmania.zive.cz/getthumbnail.aspx?q=100&height=20000&width=20000&id_file=179946256",
    "publishedAt": "2023-03-09T06:25:00Z",
    "content": "PDF Editor by Desygner\r\nEditujte a vytváejte PDF dle libosti\r\n<ul><li>iOS: zdarma (zatím bez hodnocení) </li><li>Android: zdarma (hodnocení 82 %)</li></ul>Aplikace se pasuje do role nejjednoduího PDF… [+4519 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Okdork.com"
    },
    "author": "Jeremy",
    "title": "Making It In The Music Industry (w/ Ben Kweller)",
    "description": "﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿ Subscribe: Apple Podcasts / Spotify In today’s episode, I talk to Grammy-nominated musician, Ben Kweller. Tragically a few days after this recording - ben’s son sadly passed away in a tragic car accident. To ho…",
    "url": "https://okdork.com/ben-kweller/",
    "urlToImage": "https://okdork.com/wp-content/uploads/OkDork-Default-1070x560-1.jpg",
    "publishedAt": "2023-03-09T07:06:59Z",
    "content": "In todays episode, I talk to Grammy-nominated musician, Ben Kweller.\r\nTragically a few days after this recording - bens son sadly passed away in a tragic car accident.\r\nBen started in the music indus… [+1544 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Bringatrailer.com"
    },
    "author": "bringatrailer",
    "title": "BaT Auction: 6k-Mile 2021 Mercedes-AMG G63",
    "description": "This 2021 Mercedes-AMG G63 is powered by a twin-turbocharged 4.0-liter V8 mated to a nine-speed automatic transmission, a dual-range transfer case, and three locking differentials. It is finished in black over black leather upholstery and is equipped with a b…",
    "url": "https://bringatrailer.com/listing/2021-mercedes-amg-g63-14/",
    "urlToImage": "https://bringatrailer.com/wp-content/uploads/2023/02/2021_mercedes-amg_g63_jvm08031-41131.jpg",
    "publishedAt": "2023-03-09T00:15:12Z",
    "content": "This 2021 Mercedes-AMG G63 is powered by a twin-turbocharged 4.0-liter V8 mated to a nine-speed automatic transmission, a dual-range transfer case, and three locking differentials. It is finished in … [+2191 chars]"
    },
    {
"source": {
    "id": null,
    "name": "DIE WELT"
    },
    "author": "WELT",
    "title": "Kohle für Deutschlands Stromversorgung immer wichtiger",
    "description": "Trotz aller Pläne zum Ausbau der erneuerbaren Energien: Kohle ist in Deutschland weiter die wichtigste Energiequelle. Der Anteil von Kohlestrom am Energiemix stieg im vergangenen Jahr durch die Abkopplung von russischem Gas auf ein Drittel.",
    "url": "https://www.welt.de/wirtschaft/article244188065/Kohle-fuer-Deutschlands-Stromversorgung-immer-wichtiger.html",
    "urlToImage": "https://img.welt.de/img/wirtschaft/mobile244188097/1081355797-ci16x9-w1200/Sonnenaufgang-am-Kohlekraftwerk-Mehrum.jpg",
    "publishedAt": "2023-03-09T09:36:07Z",
    "content": "Kohle hat als wichtigster Energieträger für die Stromproduktion in Deutschland im vergangenen Jahr an Bedeutung gewonnen. Der Anteil der Stromerzeugung aus den als klimaschädlich geltenden Kohlekraft… [+1823 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Ipadizate.com"
    },
    "author": "Ángel Roca",
    "title": "¿Un ChatGPT de Apple? La compañía está reconsiderando el desarrollo de una IA propia",
    "description": "La Inteligencia Artificial, o IA, no ha podido comenzar el año con mejor pie gracias a la llegada de numerosas aplicaciones interesantes, Probablemente la más popular de todas es ChatGPT, una herramienta capaz de contestarnos casia. cualquier cosa y que ya te…",
    "url": "https://ipadizate.com/apple/un-chatgpt-de-apple-la-compania-esta-reconsiderando-el-desarrollo-de-una-ia-propia",
    "urlToImage": "https://ipadizate.com/hero/2023/03/logo-apple.1678347411.0622.jpg?width=1200",
    "publishedAt": "2023-03-09T08:01:07Z",
    "content": "Parece que Apple ha decidido impulsar su departamento de Inteligencia Artificial\r\nLa Inteligencia Artificial, o IA, no ha podido comenzar el año con mejor pie gracias a la llegada de numerosas aplica… [+2375 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Ipadizate.com"
    },
    "author": "Gabriela Martínez",
    "title": "Un estudio revela qué edad tienen los usuarios de iPhone, iPad y Mac",
    "description": "Nuevos estudios confirman una tendencia cada vez más obvia. El público joven ama a Apple. Después de que hace unas semanas, un una publicación afirmara que la mayoría de los dueños de iPhones en Estados Unidos pertenecen a la generación Z, una investigación r…",
    "url": "https://ipadizate.com/apple/un-estudio-revela-que-edad-tienen-los-usuarios-de-iphone-ipad-y-mac",
    "urlToImage": "https://ipadizate.com/hero/2023/03/usuarios-apple-edad.jpg?width=1200",
    "publishedAt": "2023-03-09T04:41:31Z",
    "content": "Apple ha conquistado al público joven\r\nNuevos estudios confirman una tendencia cada vez más obvia. El público joven ama a Apple. Después de que hace unas semanas, un una publicación afirmara que la m… [+1706 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Ipadizate.com"
    },
    "author": "Gabriela Martínez",
    "title": "Cada vez parece más claro que la tercera temporada de Ted Lasso será la última",
    "description": "Hace pocas semanas Apple TV+ confirmó el inicio de la tercera temporada de Ted Lasso el 15 de marzo. Y aunque la noticia ha alegrado a los seguidores de la serie más exitosa de la plataforma también los ha entristecido. Y es que, tal como se sospechaba desde …",
    "url": "https://ipadizate.com/apple-tv/cada-vez-parece-mas-claro-que-la-tercera-temporada-de-ted-lasso-sera-la-ultima",
    "urlToImage": "https://ipadizate.com/hero/2022/11/Ted-Lasso-Apple-TV.1669064350.7372.png?width=1200",
    "publishedAt": "2023-03-09T02:29:58Z",
    "content": "Ted Lasso estrenará su tercera temporada el 15 de marzo.\r\nHace pocas semanas Apple TV+ confirmó el inicio de la tercera temporada de Ted Lasso el 15 de marzo. Y aunque la noticia ha alegrado a los se… [+2459 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Xakep.ru"
    },
    "author": "kclo3",
    "title": "Неправильные эльфы. Учим исполняемые файлы Linux сопротивляться отладке",
    "description": "Для подписчиковИз множества техник антиотладки одна стоит особняком: ее суть — не задетектить дебаггер, а не допустить запуска в нем приложения. Поговорим о том, как это достигается, о parser differentials и фаззинге. А потом получим такие эльфы, чтобы их с р…",
    "url": "https://xakep.ru/2023/03/09/malformed-elf/",
    "urlToImage": "https://xakep.ru/wp-content/uploads/2023/03/417935/elf_socials.jpg",
    "publishedAt": "2023-03-09T09:28:36Z",
    "content": "­­ ­ ­ ­ ­:    ­ ­,   ­ ­   ­­. ­  ,   ­­,  parser differentials  ­.   ­, ­    ­  ­­,  ­ ­ ­  ­ ­ ­  Linux.\r\n ­  ­ ­  ­ .   ­ ­­ ­, ­ ­ ­ ­­. ,  ­, XML. ­­  ­,  ­ ­  ­­, SOAP  RSS.  ­ ­ :   ­­ XML-­ … [+2672 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Vnexpress.net"
    },
    "author": "VnExpress",
    "title": "An Dĩ Hiên giấu con việc chồng bị bắt",
    "description": "Diễn viên Đài Loan An Dĩ Hiên không nói cho các con việc chồng - doanh nhân Trần Vinh Luyện - bị bắt vì cáo buộc lừa đảo, rửa tiền.",
    "url": "https://vnexpress.net/an-di-hien-giau-con-viec-chong-bi-bat-4579175.html",
    "urlToImage": "https://vcdn1-giaitri.vnecdn.net/2023/03/09/topandihien1-1678325029-2761-1678325166.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=8YS3x1WUy9RsvfyxwENIeQ",
    "publishedAt": "2023-03-09T01:31:50Z",
    "content": "Din viên ài Loan An D Hiên không nói cho các con vic chng - doanh nhân Trn Vinh Luyn - b bt vì cáo buc la o, ra tin.Theo Next Apple, hôm 8/3, Trn Vinh Luyn nhc n gia ình khi chu thm vn ti tòa án Maca… [+1882 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Vnexpress.net"
    },
    "author": "VnExpress",
    "title": "Toyota Yaris 2023 thiết kế lại, thêm trang bị",
    "description": "Thái Lan- Mẫu hatchback cỡ B nâng cấp giao diện, bổ sung tính năng, bán ra 4 phiên bản, giá từ 16.000-19.800 USD.",
    "url": "https://vnexpress.net/toyota-yaris-2023-thiet-ke-lai-them-trang-bi-4579300.html",
    "urlToImage": "https://i2-vnexpress.vnecdn.net/2023/03/09/z625190-1678346907-1678346919-7006-1678346989.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=DOkOgBZPmwhdk9qv570gkw",
    "publishedAt": "2023-03-09T09:25:14Z",
    "content": "Thái LanMu hatchback c B nâng cp giao din, b sung tính nng, bán ra 4 phiên bn, giá t 16.000-19.800 USD.So vi bn hin hành, Yaris 2023 có ngoi tht mi, tp trung u xe theo thit k u búa (Hammerhead Design… [+1147 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Just Jared"
    },
    "author": "Just Jared",
    "title": "How to Watch Oscar 2023 Nominees at Home: Every Movie's Streaming Location Revealed!",
    "description": "The 2023 Academy Awards ceremony will be happening this weekend and if you’re anything like us, you still have some catching up to do ahead of the show! Luckily, most of the nominated movies are currently available to watch at home on various streaming servic…",
    "url": "http://www.justjared.com/2023/03/08/how-to-watch-oscar-2023-nominees-at-home-every-movies-streaming-location-revealed/",
    "urlToImage": "https://cdn.justjared.com/wp-content/uploads/headlines/2023/03/oscars-where.jpg",
    "publishedAt": "2023-03-09T01:03:26Z",
    "content": "The 2023 Academy Awards ceremony will be happening this weekend and if you’re anything like us, you still have some catching up to do ahead of the show!\r\nLuckily, most of the nominated movies are cur… [+2079 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Awaytogarden.com"
    },
    "author": "margaret",
    "title": "‘the hidden company that trees keep,’ with jim nardi",
    "description": "DR. JAMES NARDI says you can tell a lot about a tree by the company it keeps. From life in the soil around their roots..\nThe post ‘the hidden company that trees keep,’ with jim nardi appeared first on A Way To Garden.",
    "url": "https://awaytogarden.com/the-hidden-company-that-trees-keep-with-jim-nardi/",
    "urlToImage": "https://awaytogarden.com/wp-content/uploads/2023/03/Nard-20210407-20.jpeg",
    "publishedAt": "2023-03-09T00:51:23Z",
    "content": "DR. JAMES NARDI says you can tell a lot about a tree by the company it keeps. From life in the soil around their roots to the action up in their canopies, trees are swarming with engagementunseen mic… [+19899 chars]"
    },
    {
"source": {
    "id": null,
    "name": "DIE WELT"
    },
    "author": "WELT",
    "title": "Bei ausländischen Fachkräften wird Deutschland unbeliebter – Patentanmeldungen rückläufig",
    "description": "Deutschland gilt nach wie vor als Land der Ingenieure, Techniker und Tüftler. Doch in zukunftsträchtigen High Tech-Branchen überholen wird die heimische Industrie überholt. Dazu kommt: Ausgerechnet bei dringend benötigten Fachkräften verliert die Bundesrepubl…",
    "url": "https://www.welt.de/wirtschaft/article244185461/Migration-Bei-auslaendischen-Fachkraeften-verliert-Deutschland-an-Beliebtheit.html",
    "urlToImage": "https://img.welt.de/img/wirtschaft/mobile243811129/4601359207-ci16x9-w1200/120554518.jpg",
    "publishedAt": "2023-03-09T04:30:29Z",
    "content": "Deutschland hat im internationalen Vergleich bei Fachkräften, Unternehmern und Start-ups aus dem Ausland an Beliebtheit verloren. Zu diesem Ergebnis kommt eine am Donnerstag veröffentlichte Studie de… [+3967 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "NewMediaWire",
    "title": "Gift Card Market Size 2023, Share | Growing Report [2028]",
    "description": "Pune, India - (NewMediaWire) - March 9, 2023 - Gift Card Market information for each competitor includes (JD, Zara, Macy's, Home Depot, Lowes, Google Play...",
    "url": "https://finance.yahoo.com/news/gift-card-market-size-2023-073851947.html",
    "urlToImage": "https://media.zenfs.com/en/newsmediawire_165/90fcede76b343ce8ffdfdc836e41f26b",
    "publishedAt": "2023-03-09T07:38:51Z",
    "content": "Pune, India - (NewMediaWire) - March 9, 2023 - Gift Card Market information for each competitor includes (JD, Zara, Macy's, Home Depot, Lowes, Google Play, Walmart, Carrefour, Walgreens, Apple (App S… [+10503 chars]"
    }
    ]
  constructor(){
    super();
    console.log("hi i am jainil doshi building first website from react")
    this.state= {
      articles:[],
      loading:false,
      page:1

    }
  }

  async componentDidMount(){
    console.log("cdm")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&apiKey=4d3fd04a4c4143879ecb1651a53d9e4d&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true}); 
    let data =await fetch(url);
    let parseData =await data.json()
    console.log(parseData);
    this.setState({articles:parseData.articles,totalArticles:parseData.totalResults})



  }
   handlePrevClick=async ()=>{
    console.log("Previous");
    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&apiKey=4d3fd04a4c4143879ecb1651a53d9e4d&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data =await fetch(url);
    let parseData =await data.json()
    console.log(parseData);

    this.setState({
        page: this.state.page - 1,
        articles:parseData.articles
        
    })

  }

  handleNextClick=async ()=>{
    console.log("Next");
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&apiKey=4d3fd04a4c4143879ecb1651a53d9e4d&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data =await fetch(url);
        let parseData =await data.json()    
        this.setState({
            page: this.state.page + 1,
            articles:parseData.articles,
            loading:false
            
        })
        

    }
 

  }

  render() {
    console.log("render")
    return (
      <div className='container my-3'>
        <h1 className="text center transition-all" style={{margin:"40px 0px"}}>Khabari News - Top Headlines  </h1>
        {/* {!this.state.loading && <Spinner/>} */}
        <div className="row">  
        { this.state.articles.map((element)=>{

       
       return <div className="col-md-4" key ={element.url} >
        
        <Newsitem title ={element.title?element.title:""} Description={element.Description} imageUrl={element.urlToImage } newsUrl={element.url}/>
        </div>
        
        

        })}
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>     
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>  
        
           
        </div>  


        </div>
        
      </div>
    )
  }
}

export default News
