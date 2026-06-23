---
title: "Delavnica NVIDIA: Nadgradnja aplikacij CUDA C++ na več vozlišč"
date: 2024-06-11
tags:
  - conference
  - project
summary: "V torek, 21. maja 2024, je potekala 8-urna delavnica \"Nadgradnja aplikacij CUDA C++ na več vozlišč\" v okviru projekta EuroCC2. Delavnico sta vodila doc. dr. Domen Verber in asistent Jani Dugonik iz UM FERI."
coverImage: "@/assets/media/email-01-676ac9.png"
images:
  - "@/assets/media/02-b1a2e3.png"
  - "@/assets/media/email-01-676ac9.png"
  - "@/assets/media/email-04-5ec16b.png"
  - "@/assets/media/posta-nadica-1-ee3dd1.png"
---

V torek, 21. maja 2024, je bila izvedena 8-urna delavnica z naslovom “ Nadgradnja aplikacij CUDA C++ na več vozlišč ” v okviru projekta EuroCC2 , v sodelovanju z NVIDIA in IEEE ter UM FERI . Predavanje je izvedel doc. dr. Domen Verber, ob njem pa je sodeloval še kot asistent Jani Dugonik, oba iz Univerze v Mariboru – FERI.

Sodobno visokozmogljivo računalništvo ( HPC ), aplikacije za globoko učenje in podobne zahtevajo za učinkovito delovanje računsko moč grafičnih procesnih enot ( GPE ) na ravni računalniških gruč in omrežij. Razvoj aplikacij s arhitekturno rešitvijo CUDA, ki omogoča učinkovito izrabo grafičnih procesnih enot v računalniških gručah, zahteva poseben nabor veščin. Na tej delavnici so spoznali in praktično preizkusili nekaj orodij in tehnik, potrebnih za pisanje aplikacij s programskim ogrodjem CUDA C/C++ , ki se lahko učinkovito prilagajajo izvajanju aplikacij v gručah opremljenimi z GPE NVIDIA .

Na delavnici so udeleženci spoznali in preizkusili orodja in tehnike potrebne za razvoj aplikacij CUDA C/C++, ki se lahko učinkovito prilagajajo superračunalniškim gručam opremljenimi z grafičnimi procesorji NVIDIA. Na praktičnih primerih so dopolnili programsko kodo in preizkusili njeno izvajanje v interaktivnem oblačnem okolju, ki vsebuje več grafičnih procesorjev NVIDIA. Spoznali so tudi nekaj osnovnih programskih metod, ki omogočajo učinkovito izvajanje takšnih aplikacij v računalnikih gručah. Poudarek je bil na uporabi klasičnega MPI programskega vmesnika (Vmesnika za posredovanje sporočil/ Message Passing Interface – MPI), ki je nadgrajen z arhitekturno rešitvijo CUDA, in programskim vmesnikom NVSHMEM.

NVSHMEM je programski vmesnik za vzporedno izvajanje programov na distribuiranih okoljih, ki temelji na odprtokodni rešitvi OpenSHMEM in ki zagotavlja učinkovito in razširljivo komunikacijo na gručah opremljeni z grafičnimi procesorji NVIDIA. NVSHMEM ustvari skupni pomnilniški prostor za podatke, ki obsegajo pomnilnike več grafičnih procesorjev. Do tega pomnilniškega prostora lahko transparentno dostopajo grafične procesne enote, centralne procesne enote in operacije povezane s tokovi CUDA. Asinhroni prenos podatkov, ki ga NVSHMEM omogoča, zmanjša stroške sinhronizacije med CPE in GPE. NVSMEM omogoča tudi zaganjanje jeder, ki se izvajajo daljši čas in vključujejo tako komunikacijo med enotami in tudi računanje. S sem se zmanjšajo režijski stroški velikih aplikacij, ki se izvajajo na večjem številu vozlišč. NVSHMEM je je učinkovito uporabljen v najzmogljivejših superračunalniških sistemi, kot je superračunalnik Summit (Oak Ridge, Leadership Computing Facility), superračunalnik Sierra (Nacionalni laboratorija Lawrence Livermore) in superračunalniška rešitev podjetja NVIDIA, DGX A100.

Po končani delavnici so imeli udeleženci možnost opraviti kratek test in dodatno programsko nalogo ter pridobiti uradni certifikat Inštituta za globoko učenje podjetja NVIDIA.

Vsaj še pol leta po zaključku delavnice imajo udeleženci na portalu NVIDIA možnost dostopa do delavnic, na katere so se prijavili, in gradiv ter opravljanje testa za pridobitev certifikata.

Ta delavnica je bila tretja (in tudi zadnja) v sklopu treh delavnic. Naslednji sklop delavnic bo predvidoma v septembru.