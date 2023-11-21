import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigateBack from '../../components/navigate-back';

export default function GeneralInfoScreen() {
  return (
    <SafeAreaView className='bg-slate p-4 flex-1'>
      <NavigateBack title='General Information' />
      <ScrollView nestedScrollEnabled className='flex flex-col gap-4'>
        <View className=''>
          <View className='mb-2'>
            <Text className='mb-1'>
              1. Kakayahang gawin ang Site o Pond - tumutukoy sa kaangkupan at
              praktikalidad ng isang tiyak na lokasyon para sa pagtatayo at
              pagpapatakbo ng isang palaisdaan.
            </Text>
            <View className='flex flex-col gap-2'>
              <View>
                <Text className='font-bold'>
                  a. Pinagmumulan ng Tubig (magagamit sa buong taon)
                </Text>
                <Text>
                  - Imbakan, malalim na poso, irigasyon, ulan, dam, bukal.
                </Text>
              </View>
              <View>
                <Text className='font-bold'>
                  b. Pagiging Accessible o madaling puntahan
                </Text>
                <Text>
                  - Malapit sa daan at pamilihan sa pamamagitan ng
                  transportasyon sa tubig man o lupa.
                </Text>
              </View>
              <View>
                <Text className='font-bold'>c. Uri ng Lupa</Text>
                <Text>- Clay, Clay na may lupa</Text>
              </View>
              <Text className='font-bold'>
                d. Malayo sa pagbaha (may sistema para sa pagapaw o pag bawas ng
                tubig)
              </Text>
              <Text className='font-bold'>e. Sitwasyon sa Kapayapaan</Text>
            </View>
          </View>
          <View className='mb-2'>
            <Text className='mb-1'>
              2. Kalidad ng Stock - tumutukoy sa mga katangian at
              katanggap-tanggap na mga katangian ng populasyon ng isda na
              matatagpuan sa isang fishpond o sistema ng aquaculture.
            </Text>
            <View className='flex flex-col gap-2'>
              <Text className='font-bold'>a. Mabilis na paglaki</Text>
              <Text className='font-bold'>
                b. Pagkahuli sa pagmamature o paglaki
              </Text>
              <Text className='font-bold'>
                c. Kasarapan pag niluto at kinain
              </Text>
              <Text className='font-bold'>d. Kalidad</Text>
            </View>
          </View>
          <View className='mb-2'>
            <Text className='mb-1'>
              3. Hardiness - tumutukoy sa kakayahan ng mga uri ng isda na tiisin
              at masanay o magadjust sa iba't ibang mga kondisyon ng kapaligiran
              sa loob ng isang pond.
            </Text>
            <View className='flex flex-col gap-2'>
              <Text className='font-bold'>a. Paghahanda ng Pond</Text>
              <Text className='font-bold'>
                b. Pagsasama-sama ng mga Fingerlings
              </Text>
              <Text className='font-bold'>
                c. Araw-araw ng Pagpapakain/Fertilization
              </Text>
              <Text className='font-bold'>d. Pagmamanman o Monitoring</Text>
              <Text className='font-bold'>
                e. Pagpapanatili (Kalinisan at lalim ng tubig)
              </Text>
              <Text className='font-bold'>
                f. Pagkakaroon nang pag tatala o pag lista
              </Text>
            </View>
          </View>
          <View>
            <Text>
              4. Pagtanggap sa mga Market - tumutukoy sa antas ng demand at
              kahalagahan ng mga isda o mga produktong akwatiko na nalilikha sa
              fishpond sa mga potensyal na mamimili o mga konsyumer sa merkado o
              market.
            </Text>
          </View>
        </View>
        <View>
          <Text className='text-lg font-bold'>I. Paghahanda ng Palaisdaan</Text>
          <Text className='mb-2'>
            1. Pagbabawas ng Tubig - tumutukoy sa proseso ng pagtanggal ng tubig
            mula sa isang pond o fishpond para sa iba't ibang layunin, tulad ng
            pagpapanatili, paglilinis, o paghahanda para sa pagaalaga ng isda.
            Ito rin ay nagbibigay ng kasiguraduhan na ang mga lumang stock,
            predator (ibang uri nang hayop na kumakain ng ating alagang isda),
            at hindi gustong uri ng hayop na nasa loob nang palaisdaan ay
            maalis.
          </Text>
          <View className='mb-2'>
            <Text className='mb-1'>
              2. Pagtanggal ng mga Pesteng Organismo - tumutukoy sa proseso ng
              pagkontrol o pagsugpo sa mga pesteng organismo o hindi gustong mga
              organism o hayop na maaaring magdulot ng negatibong epekto sa
              ekosistema ng palaisdaan o sa stock ng isda sa loob nito. Ang mga
              pesteng ito ay maaaring kinabibilangan ng iba't ibang uri ng
              organismo, tulad ng mga mapanirang hayop, insekto, parasito, o mga
              hindi gustong uri, na maaaring makasira sa isda o hadlangan ang
              pangkalahatang produktibo ng palaisdaan.
            </Text>
            <View className='flex flex-col gap-2'>
              <Text>
                - Kung hindi nagawang tuyuin ang buong palaisdaan, dapat itong
                sumailalim sa paggamot (7-10 araw bago ang pagtatanim).
              </Text>
              <View>
                <Text>- Karaniwang mga Pamamaraan sa Paggamot ng Pond:</Text>
                <Text>a. Komersyal na Snail Killer.</Text>
                <Text>
                  b. Paggamit ng apog, kasama ang hindi organikong pataba.
                </Text>
              </View>
            </View>
          </View>
          <View className='mb-2'>
            <Text className='mb-1'>
              3. Paghuhugas ng Pond - ang paghuhugas ng pond ay isang paraan na
              ginagamit upang linisin at ibalik ang mga palaisdaan o water
              bodies na kontaminado ng nakalalasong mga substansiya, tulad ng
              mga pesticide, kemikal, o polusyon. Ito ay isang epektibong paraan
              upang mabawasan ang masasamang epekto ng lason at ibalik ang
              ekolohikal na balanse ng kapaligiran sa tubig (hugasan ang mga
              palaisdaan 2 araw matapos ang paglason).
            </Text>
            <View className='flex flex-col gap-1'>
              <Text>
                Matapos ang panahong ito ng paghihintay, maaaring simulan ang
                proseso ng paghuhugas ng palaisdaan. Narito ang ilang mga
                karaniwang hakbang na kasama sa paghuhugas ng palaisdaan:
              </Text>
              <Text>
                - Ang Unang Hakbang ay Pagpalit ng Tubig. Simulan sa pababawas o
                pag tanggal ng isang malaking bahagi ng kontaminadong tubig mula
                sa pond. Ang lawak ng pagpalit ng tubig ay depende sa kalubhaan
                ng kontaminasyon. Sa ilang mga kaso, maaaring kinakailangan na
                ganap na walain o tanggalin ang tubig ng pond at punuin ito ng
                sariwang tubig.
              </Text>
              <Text>
                - Ang Ikalawang Hakbang ay Mano-manong Paglilinis. Kapag
                nabawasan na ang antas ng tubig, dapat linisin nang mano-mano
                ang ibaba at mga gilid ng pond upang alisin ang anumang putik,
                dumi, o sedimentong maaaring naglalaman ng mga bakas ng lason.
                Maaaring magamit ang mga kagamitan tulad ng dredges, vacuums, o
                mga kalaykay para sa paglilinis na ito.
              </Text>
              <Text>
                - Ang Ikatlong Hakbang ay Dilution. Matapos ang pang-mekanikal
                na paglilinis, dapat punuin ang pond ng malinis na tubig. Ang
                bagong tubig ay nakakatulong sa pagbabanlaw ng anumang
                natitirang bakas ng lason at nagpo-promote ng pagbalik sa
                malusog na ekosistema sa loob ng palaisdaan.
              </Text>
              <Text>
                - Ang Ikaapat na Hakbang ay Pagsusuri sa Kalidad ng Tubig. Ang
                regular na pagsusuri sa mga parameter ng kalidad ng tubig tulad
                ng pH, antas ng dissolved oxygen, at kemikal na komposisyon ay
                mahalaga matapos ang proseso ng paghuhugas ng palaisdaan. Ito ay
                nagsisiguro na ang ating palaisdaan ay naghihilom at bumabalik
                sa isang angkop na kapaligiran para sa ating mga alagang isda.
              </Text>
              <Text>
                - Ang Huling Hakbang ay Pang-ekolohikal na rehabilitasyon.
                Depende sa kalubhaan ng pangyayaring panglason, maaaring
                kinakailangan na ipakilala ang mga kapaki-pakinabang na
                organismo, tulad ng mga aquatic na halaman o kapaki-pakinabang
                na mga bacteria, upang makatulong sa pagpapanumbalik ng natural
                na ekolohiya ng ating palaisdaan.
              </Text>
            </View>
          </View>
          <View className='mb-2'>
            <Text className='mb-1'>
              4. Pag-level ng Ibaba ng Palaisdaan - tumutukoy sa proseso ng
              paglikha ng isang malambot at pantay na lupa sa ilalim ng isang
              palaisdaan. Ito ay kinapapalooban ng pagtanggal ng anumang hindi
              pantay o nakausli na mga bagay, tulad ng mga bato, mga puno ng
              kahoy, o mga basura, at pagpapatiyak na ang buong ibaba ng
              palaisdaan ay pantay.
            </Text>
            <Text>
              - Kapag kailangan, nakakasigurong matatanggal lahat ng tubig sa
              palaisdaan.
            </Text>
            <Text>- Nagpapadali ng paghuhuli ng isda sa panahon ng ani.</Text>
          </View>
          <View className='mb-2'>
            <Text className='mb-1'>
              5. Pagtuyo ng Palaisdaan- tumutukoy sa proseso ng pagbabawas o
              kabuuang pagtanggal ng tubig sa isang palaisdaan. Karaniwang
              ginagawa ito bilang bahagi ng paghahanda o pangangalaga ng
              palaisdaan para sa iba't ibang mga kadahilanan. Narito ang ilang
              karaniwang layunin ng pagtuyo ng palaisdaan:
            </Text>
            <Text>
              - Pag-alis ng hindi nais na mga organismo at pag alis sa mga
              nakalalasong gas tulad ng ammonia at hydrogen sulfate.
            </Text>
            <Text>- Pag-alis ng sedimentasyon.</Text>
            <Text>- Pagkumpuni at pangagalaga.</Text>
            <Text>- Pagsupil ng populasyon ng isda.</Text>
          </View>
          <View className='mb-2'>
            <Text className='mb-1'>
              6. Pagkumpuni ng palaisdaan o fishpond (kung kinakailangan) -
              tumutukoy sa proseso ng pagsasaayos o pagsasauli ng isang nasirang
              palaisdaan. Kasama rito ang pag tukoy ng iba't ibang isyu na
              maaaring makaapekto sa function at hitsura ng isang palaisdaan.
              Ilan sa mga karaniwang dahilan para sa pagkumpuni ng palaisdaan ay
              mga butas, pinsalang estruktural, pagguho, nagbara sa mga tubo,
              nasirang mga liner, at mga problema sa sistema ng filtrasyon o
              sirkulasyon ng palaisdaan.
            </Text>
            <Text className='mb-1'>
              Ang partikular na mga hakbang na kasangkot sa pagkumpuni ng ating
              palaisdaan ay maaaring mag-iba depende sa kalikasan at lawak ng
              pinsala. Narito ang ilang pangkalahatang aspeto na maaaring kasama
              sa proseso ng pagkumpuni:
            </Text>
            <View className='flex flex-col gap-1'>
              <Text>
                - Ang Unang Hakbang ay Pagtutukoy ng pinsala. Isinasagawa ang
                malawakang pagsisiyasat upang matukoy ang sanhi at lawak ng
                problema.
              </Text>
              <Text>
                - Ang Ikalawang Hakbang ay Pagkukumpuni ng mga butas. Kung may
                mga butas sa palaisdaan, mahalaga ang paghanap at pagkumpuni sa
                mga ito.
              </Text>
              <Text>
                - Ang Ikatlong Hakbang ay Pagkukumpuni ng estruktura. Sa kaso ng
                pinsalang estruktural, tulad ng mga gumuhong pader o
                nagdegradang gilid, isinasagawa ang angkop na mga pagkukumpuni.
              </Text>
              <Text>
                - Ang Ikaapat na Hakbang ay Kontrol sa pagguho. Ang pag-address
                ng mga isyu sa pagguho ay mahalaga upang maiwasan ang
                karagdagang pinsala sa palaisdaan.
              </Text>
              <Text>
                - Ang Ikalimang Hakbang ay Paglilinis at pag-alis ng mga basura.
                Mahalaga ang pag-aalis ng anumang nagipon na mga basura, tulad
                ng mga dahon, sanga, at sediment, para sa kalusugan at
                estetikong kaakit-akit ng palaisdaan.
              </Text>
              <Text>
                - Ang Ikaanim na Hakbang ay Pag-upgrade ng mga sistema ng
                filtrasyon at sirkulasyon ng palaisdaan. Kung ang mga sistema ng
                filtrasyon o sirkulasyon ng palaisdaan ay hindi maayos, maaaring
                kinakailangan ang mga pagkukumpuni o pag-upgrade.
              </Text>
              <Text>
                - Ang Ikapitong Hakbang ay Pagdaragdag ng kinakailangang mga
                kasangkapan ng palaisdaan (Opsiyonal). Depende sa inaasahang
                kakayahan at estetikong kaakit-akit, maaaring isama ang mga
                karagdagang kasangkapan tulad ng mga sistema ng pag-aerasyon,
                mga talon ng tubig, o mga dekoratibong elemento sa proseso ng
                pagkumpuni.
              </Text>
            </View>
          </View>
          <View className='mb-2'>
            <Text className='mb-1'>
              7. Paglalagay ng Apog/Pagsasaayos ng Lupa at Tubig - tumutukoy sa
              proseso ng pagsasaayos ng pH at nilalaman ng mineral ng lupa at
              tubig sa isang palaisdaan upang lumikha ng angkop na kondisyon
              para sa isda o mga halaman.
            </Text>
            <Text>
              - Pagsasaayos ng Lupa: May epekto ang antas ng pH ng sa kakayahang
              mag-alaga ng halaman at pagkakaroon ng mga sustansya ng lupa nang
              ating palaisdaan. Ang pagsasaayos ng lupa ay nangangailangan ng
              pag-aplay ng agrikultural na apog, na karaniwang nasa anyong
              calcium carbonate o calcium hydroxide, upang taasan ang pH ng mga
              acidic na lupa. Ito ay tumutulong sa pag-neutralize ng acidity at
              lumikha ng isang mas kaaya-ayang kapaligiran para sa ating mga
              alagang isda.
            </Text>
          </View>
          <View className='mb-2'>
            <Text className='mb-1'>
              8. Paglalagay ng Net - tumutukoy sa proseso ng pagtatayo o
              paglalagay ng mga net sa isang palaisdaan.
            </Text>
            <Text className='mb-1'>
              Ang mga net ay para sa iba'y ibang dahilan, kabilang ang:
            </Text>
            <View className='flex flex-col gap-1'>
              <Text>
                - Paglilinis: Maaaring gamitin ang mga net upang i-filter ang
                mga basura, dahon, at iba pang lumulutang na bagay upang hindi
                makapasok sa ating palaisdaan.
              </Text>
              <Text>
                - Kontrol sa mga Predator: Maaaring magsilbi bilang isang harang
                ang net upang hadlangan ang mga predator tulad ng ibon, isda, o
                iba pang hayop na maaaring makasama sa ating mga isda sa tubig o
                manggulo sa balanse ng ekosistema sa loob ng ating palaisdaan.
              </Text>
              <Text>
                - Kontrol sa Lumot: Ang ilang mga net ay dinisenyo upang
                hadlangan ang labis na sikat ng araw na umaabot sa ibabaw ng
                lawa. Ito ay tumutulong sa kontrolin ang paglaki ng mga lumot,
                na maaaring bumilis ang pagdami sa presensya ng sikat ng araw at
                tubig na mayaman sa sustansiya.
              </Text>
              <Text>
                - Proteksyon sa Halaman: Ang mga salansan ay maaaring gamitin
                upang pangalagaan ang mga halamang tubig, lalo na ang mga
                delikado o mahahalagang uri, mula sa pagkakalbo o pinsala dahil
                sa malalakas na agos ng tubig.
              </Text>
            </View>
          </View>
          <View className='mb-2'>
            <Text className='mb-1'>
              9. Pagsasalin ng Tubig - tumutukoy ito sa proseso ng pagpupuno ng
              isang bagong gawa o binagong palaisdaan ng tubig.
            </Text>
            <Text className='mb-1'>
              Ang pagpupuno ng tubig ay may ilang mga layunin:
            </Text>
            <View className='flex flex-col gap-1'>
              <Text>
                - Pagsusuri sa Estratektura: Ang pagpupuno ng palaisdaan ng
                tubig ay nagbibigay-daan sa iyo na suriin ang integridad ng
                estruktura ng palaisdaan.
              </Text>
              <Text>
                - Oxygenation: Sa proseso ng pagpupuno, umaagos ang tubig sa
                palaisdaan, na nagpo-promote ng oxygenation. Ang oxygen ay
                mahalaga para sa kaligtasan ng mga organismo sa tubig. Ito ay
                tumutulong sa paglago ng mga kapaki-pakinabang na bacteria at
                iba pang anyo ng buhay sa tubig.
              </Text>
              <Text>
                - Pagganap ng Temperatura: Ang pagpupuno ng palaisdaan ng tubig
                ay maaaring makatulong sa pagbalanse ng temperatura nito. Ang
                mass ng tubig ay nagiging heat sink, na mas mabagal na
                nag-aabsorb at nagpapakawala ng init.
              </Text>
              <Text>
                - Pagtatatag ng Ekosistema: Ang pagpupuno ng tubig ay
                nagpapahiwatig ng pagtatatag ng isang ekosistema sa palaisdaan.
                Kapag puno na, ang palaisdaan ay nagiging angkop na tirahan para
                sa mga halamang tubig at hayop.
              </Text>
            </View>
          </View>
          <View className='mb-2'>
            <Text className='mb-1'>
              10. Basal Fertilization - tumutukoy ito sa pagpapahid ng mga
              pataba sa ibaba o basal na bahagi ng palaisdaan. Ang teknik na ito
              ay pangunahin na ginagamit sa akwakultura o pangangalaga ng isda
              upang mapalakas ang produksyon ng natural na mga organismo sa
              pagkain, tulad ng phytoplankton at zooplankton, na nagsisilbing
              pagkain ng isda o iba pang mga organismo sa tubig. Ito ang rate ng
              pag-apply ng pataba:
            </Text>
            <View className='flex flex-col gap-1'>
              <Text>
                - Organikong Pataba - 1000 hanggang 2000 kg bawat ektarya.
              </Text>
              <Text>
                - Hindi-organikong Pataba (16-20-0) - 100 hanggang 200 kg bawat
                ektarya.
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text className='text-lg font-bold'>
            II. Pag Stock ng mga Fingerlings
          </Text>
          <Text className='mb-1'>
            Ang pag stock ng mga fingerlings ay tumutukoy sa pagdaragdag ng
            batang isda, na kilala bilang fingerlings, sa isang katawan ng tubig
            tulad ng palaisdaan, lawa, o ilog. Ang mga fingerlings ay mga batang
            isda na kadalasang nasa pagitan ng yugto ng pagiging larvae at
            pagiging adult, karaniwang may sukat na ilang pulgada.
          </Text>
          <Text className='mb-1'>
            Ang pag stock ng mga fingerlings ay isang karaniwang gawain sa
            pangangasiwa ng mga isda at akwakultura.
          </Text>
          <View className='flex flex-col gap-1'>
            <Text>
              - I-stock ang isda nang maaga sa umaga o sa huli ng hapon.
            </Text>
            <View className='flex flex-col gap-1'>
              <Text>- I-stock ang mga fingerlings na:</Text>
              <Text>a. Magandang kalidad</Text>
              <Text>b. Parehong edad at sukat</Text>
              <Text>c. Malusog</Text>
            </View>
          </View>
        </View>
        {/* <View>
          <Text className='text-lg font-bold'>III. Pag-Ani</Text>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}
