import { SafeAreaView } from 'react-native-safe-area-context';
import NavigateBack from '../../../components/navigate-back';
import { Image, ScrollView, Text, View } from 'react-native';

export default function ShrimpSpecies() {
  return (
    <SafeAreaView className='flex-1 w-full bg-slate-50 p-4'>
      <NavigateBack title='Shrimp' />
      <ScrollView>
        <Text className='text-lg font-bold mb-2'>
          Mga palatandaan na dapat isa alang alang sa pag aalaga ng hipon
        </Text>
        <Text className='mb-1'>
          <Text className='font-bold'>Pili ng Lugar: </Text>Siguraduhing
          mayroong malinis na tubig at angkop na sukat ng lupa para sa
          palaisdaan ng hipon. Dapat itong may magandang daloy ng tubig at
          maayos na sistema ng paglilinis ng tubig.
        </Text>
        <Text className='mb-1'>
          Sa pagpili ng lugar para sa pag-aalaga ng hipon, may ilang
          mahahalagang bagay na dapat isaalang-alang:
        </Text>
        <View className='flex flex-col gap-1 mb-2'>
          <Text>
            1. Sistema ng Tubig: Kailangan ng malinis at sapat na supply ng
            tubig para sa mga hipon. Dapat mayroong sistema ng tubig na madaling
            i-maintain at i-control ang temperatura at kalidad ng tubig.
          </Text>
          <Text>
            2. Espasyo: Kailangan ng sapat na espasyo para sa dami ng mga hipon
            na balak alagaan. Dapat ito ay may malalim na bahagi para sa paglaki
            ng hipon at espasyo para sa paggalaw ng mga ito.
          </Text>
          <Text>
            3. Temperatura: Ang temperatura ng tubig ay mahalaga. Karamihan sa
            mga hipon ay mas gusto ang mainit na temperatura, subalit may mga
            uri rin na mas gusto ang malamig. Ang tamang temperatura ay
            makakatulong sa kanilang paglaki at kalusugan.
          </Text>
          <Text>
            4. Kalinisan: Mahalaga ang linis ng lugar para maiwasan ang
            pagkakaroon ng sakit sa mga hipon. Dapat itong madaling linisin at
            i-maintain.
          </Text>
          <Text>
            5. Proteksyon: Protektahan ang lugar laban sa mga predator o iba
            pang panganib na maaaring makaapekto sa mga hipon.
          </Text>
          <Text>
            6. Sustansya: Ang mga hipon ay nangangailangan ng sapat na pagkain
            at sustansya. Dapat magkaroon ng pagkain na angkop sa kanilang
            pangangailangan sa lugar na pinili.
          </Text>
        </View>
        <Text className='mb-1'>
          <Text className='font-bold'>Sistema ng Pagpapakain: </Text>Ang mga
          hipon ay kailangang mapakain ng maayos. Maaaring gamitin ang mga
          commercial na feeds o pagkain na specific para sa hipon. Tiyaking may
          tamang nutrisyon ang kanilang kinakain.
        </Text>
        <Text className='mb-1'>
          Ang sistema ng pagpapakain ng hipon ay mahalaga para sa kanilang
          kalusugan at paglago. Narito ang ilang bagay na dapat isaalang-alang:
        </Text>
        <View className='flex flex-col gap-1 mb-2'>
          <Text>
            1. Uri ng Pagkain: Dapat piliin ang tamang uri ng pagkain na angkop
            sa uri ng hipon na inaalagaan. Mayroong iba't ibang uri ng feeds o
            pagkain para sa iba't ibang yugto ng paglaki ng hipon.
          </Text>
          <Text>
            2. Balanseng Nutrisyon: Ang pagkain ng hipon ay dapat nagbibigay ng
            balanseng nutrisyon para sa kanilang pangangailangan. Ito ay
            maaaring magmula sa pellets, algae, plankton, at iba pang pagkain na
            naglalaman ng protina, carbohydrates, fats, at mga bitamina.
          </Text>
          <Text>
            3. Pag-aayos ng Oras ng Pagkain: Mahalaga ang tamang oras ng
            pagpapakain ng hipon. Karamihan sa mga hipon ay mas marami kumain sa
            gabi kaysa sa umaga. Ang pagsunod sa tamang oras ng pagpapakain ay
            maaaring makatulong sa mas mahusay na pagtunaw ng pagkain at mas
            mabilis na paglaki ng hipon.
          </Text>
          <Text>
            4. Frequency ng Pagpapakain: Dapat tukuyin kung gaano kadalas dapat
            pakainin ang mga hipon. Depende ito sa kanilang laki at yugto ng
            paglaki. May mga gabay sa pagpapakain batay sa dami ng hipon at
            angkop na dami ng pagkain na dapat ibigay.
          </Text>
          <Text>
            5. Pagsubaybay sa Pagkonsumo ng Pagkain: Importante rin na
            ma-monitor ang dami ng pagkain na kinokonsumo ng mga hipon. Ito ay
            upang maiwasan ang sobra o kulang na pagpapakain na maaaring
            makaapekto sa kalusugan at kalagayan ng kanilang kapaligiran.
          </Text>
          <Text>
            6. Hinahayaang Pagproseso: Sa mga nagbibigay ng natural na pagkain,
            tulad ng mga halamang-dagat o plankton, mahalaga rin na masiguro na
            ang mga ito ay ligtas para sa pagkain ng mga hipon at walang
            contaminants o toxins.
          </Text>
        </View>
        <Text className='mb-1'>
          <Text className='font-bold'>Kontrol sa Tubig: </Text>Mahalaga ang
          tamang kontrol sa kalidad ng tubig sa paligid ng mga hipon. Maaring
          gamitin ang mga filter o iba't ibang paraan ng water treatment para
          mapanatili ang kalinisan at kalidad ng tubig.
        </Text>
        <Text className='mb-1'>
          Sa kontrol ng tubig para sa pag-aalaga ng hipon, mayroong ilang
          mahahalagang aspeto na dapat isaalang-alang:
        </Text>
        <View className='flex flex-col gap-1 mb-2'>
          <Text>
            1. Temperature: Ang tamang temperatura ng tubig ay kritikal para sa
            kalusugan ng hipon. Karamihan sa mga hipon ay nagtataguyod ng
            temperatura na hindi masyadong mainit at hindi rin masyadong
            malamig. Ang temperatura ng tubig ay maaaring mag-iba depende sa
            species ng hipon, subalit karaniwang nasa 25-30 degrees Celsius para
            sa maraming freshwater shrimp.
          </Text>
          <Text>
            2. Oxygen Levels: Ang sapat na supply ng oxygen sa tubig ay
            mahalaga. May mga aeration devices o sistema ng pagpapahangin ng
            tubig na maaaring kailanganin para panatilihin ang tamang oxygen
            levels sa tubig. Ang mababang oxygen levels ay maaaring makaapekto
            sa kalusugan ng mga hipon at maaaring humantong sa pagkamatay.
          </Text>
          <Text>
            3. PH Levels: Ang pH ng tubig ay mahalaga rin. Karamihan sa mga
            hipon ay mas gusto ang neutral to slightly alkaline na pH level. Ang
            pagbabago sa pH ng tubig ay maaaring makaapekto sa kanilang
            kalusugan.
          </Text>
          <Text>
            4. Ammonia at Nitrite Levels: Dapat bantayan ang antas ng ammonia at
            nitrite sa tubig. Ang mataas na antas nito ay maaaring makasama sa
            kalusugan ng mga hipon. Dapat mayroong sapat na sistema ng
            filtrasyon at regular na paglilinis ng tubig upang maiwasan ang
            pagtaas ng mga ito.
          </Text>
          <Text>
            5. Alisin ang Waste: Regular na pag-aalis ng dumi at natitirang
            pagkain sa tubig ay mahalaga upang mapanatili ang kalidad nito. Ang
            mga ito ay maaaring maging pinagmumulan ng polusyon at maaaring
            makaapekto sa kalusugan ng hipon.
          </Text>
          <Text>
            6. Water Quality Monitoring: Regular na pagsusuri at monitoring ng
            kalidad ng tubig ay mahalaga upang maagaang ma-identify ang anumang
            problema at maaaring agarang tugunan.
          </Text>
        </View>
        <Text className='mb-1'>
          <Text className='font-bold'>Temperatura at Klima: </Text>Ang
          temperatura ng tubig ay mahalaga. Karamihan ng mga hipon ay mas mainam
          na lumalago sa mainit na klima, ngunit may mga species na mas gusto
          ang malamig na tubig. Mahalaga ring siguruhin ang tamang ventilation
          at proteksyon laban sa mga sakuna dulot ng pagbabago ng klima.
        </Text>
        <Text className='mb-1'>
          Sa temperatura at klima, ang pag-aalaga ng hipon ay naaapektuhan ng
          mga sumusunod:
        </Text>
        <View className='flex flex-col gap-1 mb-2'>
          <Text>
            1. Ideal na Temperatura: Ang bawat species ng hipon ay may iba't
            ibang pangangailangan sa temperatura. Karamihan sa freshwater
            shrimp, tulad ng cherry shrimp o amano shrimp, ay komportable sa
            temperatura ng tubig na nasa 22 hanggang 28 degrees Celsius.
            Mahalaga na alamin ang tamang temperatura na angkop sa species na
            inaalagaan.
          </Text>
          <Text>
            2. Variations sa Temperatura: Ang biglaang pagbabago ng temperatura
            ay maaaring makaapekto sa kalusugan ng hipon. Ang pag-akyat o
            pagbaba ng temperatura ng tubig ng mabilis ay maaaring magdulot ng
            stress sa mga ito. Kung maaari, ang pag-maintain ng stable na
            temperatura ay makakatulong sa kanilang kalusugan.
          </Text>
          <Text>
            3. Klima at Lokasyon: Kung ang pag-aalaga ay sa labas ng bahay o sa
            open area, dapat isaalang-alang ang lokal na klima. Ang mainit na
            klima ay maaaring magdulot ng pagtaas ng temperatura ng tubig,
            habang malamig na klima ay maaaring magresulta sa pagbaba ng
            temperatura. Ang pagprotekta sa mga hipon laban sa mga ekstremong
            temperatura ay mahalaga.
          </Text>
          <Text>
            4. Insulation: Para sa mga setups sa labas, ang insulasyon ay
            maaaring makatulong sa pag-maintain ng tamang temperatura ng tubig.
            Ang mga pagtakip sa aquarium o pond gamit ang insulating materials
            ay maaaring makatulong sa pagprotekta sa tubig laban sa epekto ng
            klima.
          </Text>
          <Text>
            5. Pagtukoy sa Hugis ng Environment: Ang pagtukoy kung paano
            maapektuhan ng klima ang lugar kung saan naka-setup ang pag-aalaga
            ng hipon ay mahalaga. Ang ilang lugar ay mas exposed sa araw,
            samantalang ang iba ay mas nababalot ng lilim. Ang pag-aaral sa
            epekto nito sa temperatura ng tubig ay makakatulong sa pag-adjust ng
            setup para sa mga hipon.
          </Text>
        </View>
        <Text className='mb-1'>
          <Text className='font-bold'>Pagsusuri at Monitor: </Text>Regular na
          pagmomonitor sa kalidad ng tubig, kondisyon ng mga hipon, at iba pang
          mga parameter ay mahalaga. Ito ay para sa agarang pagtukoy ng anumang
          problema at agarang pagtugon.
        </Text>
        <Text className='mb-1'>
          Ang pagsusuri at monitoring sa pag-aalaga ng hipon ay mahalaga upang
          mapanatili ang kanilang kalusugan at tamang kondisyon ng kapaligiran.
          Narito ang ilang mga bagay na dapat isaalang-alang:
        </Text>
        <View className='flex flex-col gap-1 mb-2'>
          <Text>
            1. Kalidad ng Tubig: Regular na pagsubaybay sa kalidad ng tubig
            tulad ng pH levels, ammonia, nitrite, nitrate, at oxygen levels. Ang
            mga test kit ay maaaring gamitin upang masukat ang mga ito at
            tiyakin na ang mga antas ay nasa tamang range para sa kalusugan ng
            hipon.
          </Text>
          <Text>
            2. Temperatura ng Tubig: Panatilihin ang monitor sa temperatura ng
            tubig upang matiyak na ito ay nasa tamang range para sa species ng
            hipon na inaalagaan. Ang mga thermometer ay mahalaga para sa regular
            na pag-check ng temperatura.
          </Text>
          <Text>
            3. Pagsusuri sa Kalusugan ng Hipon: Obserbahan ang hitsura at kilos
            ng mga hipon. Bantayan ang anumang palatandaan ng sakit o hindi
            pangkaraniwang pag-uugali tulad ng pagkawala ng kulay, pagkalamlam
            ng katawan, o pagiging hindi aktibo ng mga hipon.
          </Text>
          <Text>
            4. Konsumo ng Pagkain: Bantayan ang dami ng pagkain na kinakain ng
            mga hipon. Kung biglaang bumaba ang kanilang pagkain, maaaring
            mayroong problema sa kalusugan o sa kalidad ng tubig.
          </Text>
          <Text>
            5. Pag-aalaga ng Tubig: Alamin ang pangangailangan ng paglilinis ng
            tubig at pagpapalit ng tubig. Ang mga regular na pagbabago ng tubig
            ay maaaring kailanganin depende sa laki ng pond o aquarium at dami
            ng hipon.
          </Text>
          <Text>
            6. Proteksyon Laban sa Predators: Bantayan ang anumang palatandaan
            ng predator na pag-atake sa mga hipon. Protektahan sila laban sa mga
            posibleng panganib na maaaring makaapekto sa kanilang kaligtasan.
          </Text>
          <Text>
            7. Pag-aaral at Edukasyon: Ang patuloy na pag-aaral at pagbabasa
            tungkol sa tamang pag-aalaga ng hipon ay mahalaga. Makipag-ugnayan
            sa mga eksperto o iba pang nag-aalaga ng hipon upang matuto ng mga
            bagong pamamaraan at teknik.
          </Text>
        </View>
        <Text className='mb-1'>
          <Text className='font-bold'>Biosecurity Measures: </Text>Ang pagsunod
          sa mga biosecurity measures tulad ng pag-aalis ng mga patay na hipon
          agad, pagsunod sa tamang sanitation procedures, at pagpigil sa
          pagpasok ng mga sakit ay mahalaga upang maiwasan ang mga outbreak sa
          iyong palaisdaan.
        </Text>
        <Text className='mb-1'>
          Ang biosecurity measures sa pag-aalaga ng hipon ay mahalaga upang
          maiwasan ang pagpasok ng sakit, pathogens, o iba pang contaminants na
          maaaring makaapekto sa kalusugan ng mga hipon. Narito ang ilang
          mahahalagang bagay na dapat isaalang-alang:
        </Text>
        <View className='flex flex-col gap-1 mb-2'>
          <Text>
            1. Quarantine Procedures: Bago ipasok ang bagong batch ng hipon sa
            existing na environment, mahalaga ang paglagay ng mga ito sa
            quarantine tank o area. Ito ay upang masubaybayan ang kalusugan ng
            mga ito bago sila ilipat sa pangunahing habitat ng iba pang hipon.
            Ito rin ay para maiwasan ang pagkalat ng sakit kung sakaling may
            dala ang bagong dating na mga hipon.
          </Text>
          <Text>
            2. Sanitation: Panatilihin ang kalinisan sa lahat ng oras. Regular
            na paglilinis ng mga kagamitan, aquarium, o pond ay mahalaga upang
            maiwasan ang pagkalat ng pathogens. Dapat itong maging bahagi ng
            regular na routine sa pag-aalaga.
          </Text>
          <Text>
            3. Bawal ang Overcrowding: Ang sobrang dami ng hipon sa isang lugar
            ay maaaring magdulot ng stress at pagkalat ng sakit sa kanilang
            environment. Sundin ang tamang density o bilang ng hipon na dapat sa
            isang tiyak na sukat ng pond o aquarium.
          </Text>
          <Text>
            4. Biosecurity sa Pagpasok at Labas: Ibigay ang biosecurity
            protocols sa mga tao na papasok o lalabas sa lugar ng pag-aalaga ng
            hipon. Dapat silang sumunod sa mga hakbang tulad ng paglilinis ng
            kamay o pagsusuot ng kaukulang kasuotan para maiwasan ang pagdadala
            o pagdadala ng contaminants mula sa labas.
          </Text>
          <Text>
            5. Pagpigil sa Pagpasok ng Potensyal na mga Carrier: Iwasan ang
            pagpasok ng bagay na maaaring magdala ng sakit o contaminants tulad
            ng ibang hayop, halaman, o kahit mga kagamitan mula sa labas na
            hindi na-decontaminate.
          </Text>
          <Text>
            6. Regularyong Pagsusuri: Regular na pagsusuri ng kalagayan ng mga
            hipon at ng kanilang kapaligiran ay mahalaga upang maagaang matukoy
            ang anumang problema at maaaring agarang tugunan.
          </Text>
        </View>
        <Text className='mb-1'>
          <Text className='font-bold'>Edukasyon at Patnubay: </Text>Mahalaga rin
          ang pag-aaral at patnubay sa pamamahala ng palaisdaan ng hipon.
          Pwedeng maging makakatulong ang mga training seminars, online
          resources, at pagkonsulta sa mga eksperto.
        </Text>
        <Text className='mb-1'>
          Sa aspeto ng edukasyon at patnubay sa pag-aalaga ng hipon, narito ang
          ilang mahahalagang bagay na dapat isaalang-alang:
        </Text>
        <View className='flex flex-col gap-1 mb-2'>
          <Text>
            1. Pagsasanay at Edukasyon: Mahalaga ang maayos na pagsasanay at
            edukasyon sa mga nag-aalaga ng hipon. Ito ay maaaring sa anyo ng
            pagsasagawa ng mga workshop, seminars, o training sessions para sa
            mga indibidwal na nagbabalak mag-alaga ng hipon. Ang tamang kaalaman
            sa pag-aalaga, pangangalaga sa kalusugan, at mga best practices ay
            mahalaga upang maging epektibo ang pag-aalaga ng mga ito.
          </Text>
          <Text>
            2. Pagbibigay ng Resource Materials: Ang mga resource materials
            tulad ng libro, online guides, at iba pang dokumentasyon ay
            makakatulong sa mga nag-aalaga ng hipon na magkaroon ng basehan at
            kaalaman. Dapat itong maging madaling ma-access at komprehensibo
            upang maging gabay sa mga tamang pamamaraan at teknik sa pag-aalaga.
          </Text>
          <Text>
            3. Mentorship at Pagtuturo: Ang mga baguhan sa pag-aalaga ng hipon
            ay maaaring makinabang mula sa mentorship ng mga eksperto sa
            larangan. Ang mga experienced na nag-aalaga ng hipon ay maaaring
            magbigay ng practical na patnubay at personal na payo sa mga
            baguhan.
          </Text>
          <Text>
            4. Pagsusuri ng Case Studies: Pag-aaral sa mga kasong nangyari na sa
            pag-aalaga ng hipon ay makakatulong sa pag-unawa sa iba't ibang isyu
            at solusyon. Ang pag-aaral sa mga case study ay maaaring magbigay ng
            mga praktikal na karanasan na maaaring magamit bilang gabay sa
            pag-aalaga.
          </Text>
          <Text>
            5. Online Communities at Forums: Ang pagiging miyembro ng online
            communities at forums para sa mga nag-aalaga ng hipon ay magbibigay
            ng pagkakataon na makipag-ugnayan sa ibang tao na may parehong
            interes. Ito ay maaaring maging platform para sa pagsusuri ng mga
            problema, pagtatanong ng mga katanungan, at pagbahagi ng kaalaman at
            karanasan.
          </Text>
        </View>
        <Text className='mb-1'>
          <Text className='font-bold'>Market Research: </Text>Bago magpasok sa
          negosyo, mahalaga ang pag-aaral ng market. Alamin ang demand para sa
          iyong produktong hipon, ang mga presyo, at kung paano
          makikipag-ugnayan sa mga potensyal na buyer.
        </Text>
        <Text className='mb-1'>
          Sa pagsasagawa ng market research para sa pag-aalaga ng hipon, narito
          ang ilang mahahalagang bagay na dapat isaalang-alang:
        </Text>
        <View className='flex flex-col gap-1'>
          <Text>
            1. Demand sa Merkado: Unawain kung gaano karaming tao ang interesado
            sa pag-aalaga ng hipon. Ang pagtingin sa demand para sa mga iba't
            ibang uri ng hipon ay makakatulong upang malaman kung may malaking
            market para dito.
          </Text>
          <Text>
            2. Mga Produkto at Serbisyo: Alamin ang mga produkto at serbisyo na
            hinihingi ng mga nag-aalaga ng hipon. Ito ay maaaring kasama ang
            feeds, supplements, mga kagamitan sa pag-aalaga, o anumang iba pang
            produkto na maaaring kailanganin ng mga nag-aalaga ng hipon.
          </Text>
          <Text>
            3. Kompetisyon: Alamin ang iba't ibang mga negosyo na nag-aalok ng
            parehong produkto at serbisyo. Ang pagsusuri sa presyo, kalidad ng
            produkto, at serbisyong inaalok ng mga kalaban ay makakatulong sa
            pagpaplano ng estratehiya para sa iyong sariling negosyo.
          </Text>
          <Text>
            4. Trends sa Industriya: Panatilihin ang track sa mga bagong
            developments at trends sa industriya ng pag-aalaga ng hipon. Ito ay
            maaaring kasama ang bagong teknolohiya, mga inobasyon sa pag-aalaga,
            o mga bagong produkto na lumalabas sa merkado.
          </Text>
          <Text>
            5. Pricing Strategy: Pag-aralan ang tamang presyo ng iyong mga
            produkto at serbisyo. Ito ay maaaring batay sa cost ng production,
            demand sa merkado, at presyo ng mga katapat na produkto.
          </Text>
          <Text>
            6. Customer Feedback: Kunin ang feedback mula sa mga aktuwal na
            gumagamit ng mga produkto at serbisyo sa pag-aalaga ng hipon. Ang
            kanilang mga komento at karanasan ay maaaring maging mahalagang
            impormasyon para sa pagpapabuti ng iyong negosyo.
          </Text>
          <Text>
            7. Regulasyon at Polisiya: Alamin ang mga regulasyon at polisiya na
            may kinalaman sa industriya ng pag-aalaga ng hipon. Siguraduhing
            sumusunod ang iyong negosyo sa mga alituntunin upang maiwasan ang
            anumang problema sa hinaharap.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
