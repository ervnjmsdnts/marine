import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigateBack from '../../../components/navigate-back';
import { Table, Row, Rows } from 'react-native-table-component';
import { StackScreenProps } from '@react-navigation/stack';
import { TilapiaStackParamsList } from '../../../navigation/tilapia-stack';

const alat = ['T. Nilotica - 20% Pababa', 'T. Mossambica - 20% Pataas - 35%'];
const asim = [
  '4.0 - 5.0 - Maasim - Mahinang Lumaki',
  '7.0 - 9.0 - Tama - May Production',
  '10.0 - 11.0 - Mapakla - Mamamatay',
];
const temper = ['10 °C - 20 °C'];
const paghahanda = [
  'Patuyuan',
  'Maglasan - Tobacco dust - 500 kgs/HA',
  'Hugasan',
  'Maglagay ng Apog (Lumang Pond - 500kg/HA, Bagong Pond - 1 Ton/HA)',
  'Pag-aayos ng mga screen at pasukan at labasan ng tubig',
  'Patubigan 3-5cm',
  'Mag-aabono (Chicken Manure)',
];
const semilya = [
  'Itaon sa madaling araw o kaya sa gabi kung saan malamig ang temperatura',
  'Ilatag ang mga plastic na may lamang semilya ng isda sa ibabaw ng tubig sa pond ng mga ilang minuto upang masanay sa klima ng fishpond',
  'Buksan ang plastic at dahan-dahang palabasin ang isda pag ito ay nasanay na',
];
const pagaani = [
  'Total Harvest- Huwag pakainin ang isda isang araw bago mag-ani. Gumamit ng pukot (SG-5) para mahuli ang isda. Bahagya ibaba ang level ng tubig bago mag-ani',
  'Ihanda ang mga gamit para sa pag-ani (timbangan, ice, banyera at sasakyang gagamitin)',
];
const pagGawa1 = [
  'Dahon ng Malunggay',
  'Mais',
  'Bituka ng Isda',
  'Darak',
  'Hasang ng Isda',
];
const pagGawa3 = ['3 Basong Tubig', '1 Baso Harina', 'Kaldero/Kalan'];
const mahalaga = [
  '1. Farm Practices',
  '2. Fingerlings',
  '3. Feeds',
  '4. Tubig',
  '5. Merkado',
];

const kasarianHeader = ['Kasarian', 'Hugis at Buta', 'Kulay'];
const kasarianRows = [
  ['Lalaki', '2 Butas', 'Maitim'],
  ['Babae', '3 Butas', 'Mas Maputi'],
];

const paghahandaHeader = ['Pond', 'Organic', 'Inorganic (16-20-0)'];
const paghahandaRows = [
  ['Lumang Pond', '1-2 Tons/HA', '50-100 kls/HA'],
  ['Bagong Pond', '2-3 Tons/HA', '100-200 kls/HA'],
];

const pagAalagaHeader = ['Pamamaraan', 'Dami ng Semilya', 'Lalim ng Tubig'];
const pagAalagaRows = [
  ['Extensibo', '1-3 pcs. /m²', '800cm - 1.0m'],
  ['Mala-Intensibo', '4-7 pcs. /m²', '1.5 - 2.0m'],
  ['Intensibo', '8-10 pcs. /m²', '2.5 - 3.0m'],
];

const pangangasiwaHeader = [
  'Pamamaraan',
  'Lalim ng Tubig',
  'Pagpapalit ng Tubig',
];
const pangangasiwaRows = [
  ['Extensibo', '800cm - 1.0m', '50% 1 Beses'],
  ['Mala-Intensibo', '1.5 - 2.0m', '50% 2x/Buwan'],
  ['Intensibo', '2.5 - 3.0m', '50%, Linggo-linggo'],
];

const pagkainSmallHeader = ['Pamamaraan', 'Uri ng Pagkain', 'Laki ng Isda'];
const pagkainSmallRows = [
  ['Extensibo', 'Likas', 'Semilya - Asult'],
  [
    'Mala-Intensibo',
    'Likas Supplemental Feeds',
    'Semilya - Juveniles\nJuveniles - Adult',
  ],
  ['Intensibo', 'Supplemental Feeds', 'Semilya - Adult'],
];

const pagkainBigHeader = [
  'Stage',
  'ABW',
  'Feed Type',
  'Feed Rate',
  'Feeding Frequency',
];
const pagkainBigRows = [
  ['1. Fry (1-2 weeks)', '10 - 20g', 'Fry Mash', '15-30%', '6-8x'],
  ['2. Fingerlings (15-30 days)', '30 - 40g', 'Crumble', '10-15%', '4-6x'],
  ['3. Juveniles (2-3 months)', '50 - 80g', 'Grower Pellets', '5-10%', '3-4x'],
  ['4. Adult (4-5 months)', '100 - 250g', 'Finisher Pellets', '3-2%', '2x'],
];

function CustomTable({
  headerData,
  rowData,
}: {
  headerData: string[];
  rowData: string[][];
}) {
  return (
    <Table borderStyle={{ borderWidth: 1 }}>
      <Row data={headerData} textStyle={{ fontWeight: 'bold', padding: 4 }} />
      <Rows textStyle={{ padding: 4 }} data={rowData} />
    </Table>
  );
}

export default function TilapiaSpecies({
  navigation,
}: StackScreenProps<TilapiaStackParamsList, 'TilapiaSpecies'>) {
  return (
    <SafeAreaView className='flex-1 bg-slate-50 w-full p-4'>
      <NavigateBack title='Tilapia' />
      <ScrollView nestedScrollEnabled className='flex flex-col gap-4'>
        <View>
          <Text className='font-bold text-xl'>I. Biyolohiya</Text>
          <View className='flex flex-col gap-y-2'>
            <View>
              <Text className='font-bold text-lg'>A. Uri</Text>
              <View>
                <View className='flex-row mb-1'>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() =>
                      navigation.navigate('Nilotica', {
                        content: [
                          'Mamula-mula ang kulay kitang-kita and guhit sa buntot hanggang sa buong katawan',
                          'Ang lalaki ay may kulay mapulang baba',
                          'Tinaguriang “Pla-Pla”',
                          'Nagmula sa Nile Africa noong 1972',
                          'Uri na karaniwang nakikita sa mga pamilihan',
                        ],
                        image: require('../../../../assets/tilapia/breeds/nilotica.jpg'),
                      })
                    }>
                    <Image
                      className='w-full h-24 rounded-lg'
                      source={require('../../../../assets/tilapia/breeds/nilotica.jpg')}
                    />
                  </TouchableOpacity>
                  <View className='w-1' />
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() =>
                      navigation.navigate('Mossambica', {
                        content: [
                          'Maitim na may matingkad na kulay sa dulo ng palikpik at buntot',
                          'Ang lalaki ay may kulay dilaw ang baba',
                        ],
                        image: require('../../../../assets/tilapia/breeds/mossambica.jpg'),
                      })
                    }>
                    <Image
                      className='w-full h-24 rounded-lg'
                      source={require('../../../../assets/tilapia/breeds/mossambica.jpg')}
                    />
                  </TouchableOpacity>
                </View>
                <View className='flex-row'>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() =>
                      navigation.navigate('Aureus', {
                        content: [
                          'Mangasul-asul na may pula and dulo ng tinik sa palikpik at buntot',
                          'Ang lalaki ay may kulay puti ang baba',
                        ],
                        image: require('../../../../assets/tilapia/breeds/aureus.jpg'),
                      })
                    }>
                    <Image
                      className='w-full h-24 rounded-lg'
                      source={require('../../../../assets/tilapia/breeds/aureus.jpg')}
                    />
                  </TouchableOpacity>
                  <View className='w-1' />
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() =>
                      navigation.navigate('Zili', {
                        content: [
                          'Berde na madilaw mula sa katawan hangang buntot',
                          'Ang lalaki ay may kulay pula sa baba',
                        ],
                        image: require('../../../../assets/tilapia/breeds/zili.jpg'),
                      })
                    }>
                    <Image
                      className='w-full h-24 rounded-lg'
                      source={require('../../../../assets/tilapia/breeds/zili.jpg')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View>
              <Text className='font-bold text-lg'>B. Alat</Text>
              <View className='flex flex-col gap-y-2'>
                {alat.map((text, index) => (
                  <Text className='' key={index}>{`\u2022 ${text}`}</Text>
                ))}
              </View>
            </View>
            <View>
              <Text className='font-bold text-lg'>C. Asim at Pakla</Text>
              <View className='flex flex-col gap-y-2'>
                {asim.map((text, index) => (
                  <Text key={index}>{`\u2022 ${text}`}</Text>
                ))}
              </View>
            </View>
            <View>
              <Text className='font-bold text-lg'>D. Temperatura</Text>
              {temper.map((text, index) => (
                <Text key={index}>{`\u2022 ${text}`}</Text>
              ))}
            </View>
            <View>
              <Text className='font-bold text-lg'>E. Kasarian</Text>
              <View>
                <CustomTable
                  headerData={kasarianHeader}
                  rowData={kasarianRows}
                />
                <Image
                  className='w-full h-24 mt-2 rounded-md'
                  source={require('../../../../assets/tilapia/kasarian.jpg')}
                />
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text className='font-bold text-xl'>
            II. Pamamahala ng Palaisdaan
          </Text>
          <View className='flex flex-col gap-y-2'>
            <View>
              <Text className='font-bold text-lg'>A. Paghahanda</Text>
              {paghahanda.map((text, index) => (
                <Text className='mb-2' key={index}>{`\u2022 ${text}`}</Text>
              ))}
              <CustomTable
                headerData={paghahandaHeader}
                rowData={paghahandaRows}
              />
              <Text>{`\u2022 Patubigan Uli - 30cm`}</Text>
            </View>
            <View>
              <Text className='font-bold text-lg'>
                B. Paghuhulog ng semilya
              </Text>
              {semilya.map((text, index) => (
                <Text className='mb-2' key={index}>{`\u2022 ${text}`}</Text>
              ))}
            </View>
            <View>
              <Text className='font-bold text-lg'>
                C. Pag-aalaga at Pangangasiwa
              </Text>
              <View className='flex flex-col gap-y-2'>
                <View className=''>
                  <Text className='font-bold'>1. Uri ng Pag-Aalaga</Text>
                  <Text className='mb-2'>{`a. Monoculture o Isahan`}</Text>
                  <Text>{`b. Polyculture o Dalwahan(2) o Maramihan`}</Text>
                </View>
                <View>
                  <Text className='font-bold mb-2'>
                    2. Pamamaran ng Pag-aalaga
                  </Text>
                  <CustomTable
                    headerData={pagAalagaHeader}
                    rowData={pagAalagaRows}
                  />
                </View>
                <View>
                  <Text className='font-bold mb-2'>
                    3. Pangangasiwa ng Tubig
                  </Text>
                  <CustomTable
                    headerData={pangangasiwaHeader}
                    rowData={pangangasiwaRows}
                  />
                </View>
                <View>
                  <Text className='font-bold mb-2'>
                    4. Pangangasiwa ng Pagkain
                  </Text>
                  <CustomTable
                    headerData={pagkainSmallHeader}
                    rowData={pagkainSmallRows}
                  />
                </View>
                <View>
                  <Text className='font-bold mb-2'>
                    5. Pangangasiwa ng Pagkain
                  </Text>
                  <CustomTable
                    headerData={pagkainBigHeader}
                    rowData={pagkainBigRows}
                  />
                </View>
              </View>
            </View>
            <View>
              <Text className='font-bold text-lg'>
                D. Pag-aani (Partial o Total)
              </Text>
              <Text className='font-bold'>
                I-schedule ang harvest ayon sa dikta ng merkado
              </Text>
              <View className='flex flex-col gap-y-2'>
                {pagaani.map((text, index) => (
                  <Text key={index}>{`\u2022 ${text}`}</Text>
                ))}
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text className='font-bold text-xl'>III. Paggawa ng Pagkain</Text>
          <View className='flex flex-col gap-y-2'>
            <View>
              <Text className='font-bold'>
                1. Patuyuin ang dahon ng malunggay/bituka/hasang ng isda
              </Text>
              <View className='flex flex-col gap-y-2'>
                {pagGawa1.map((text, index) => (
                  <Text key={index}>{`\u2022 ${text}`}</Text>
                ))}
              </View>
            </View>
            <View>
              <Text className='font-bold'>
                2. Gilingin bawat isa sa sangkap at timbangin ng naaayon sa
                kailangang dami
              </Text>
            </View>
            <View>
              <Text className='font-bold'>
                3. Tunawin ang harina sa tubig (3:1) ratio. Bago ihulog sa
                kumukulong tubig. Haluin hanggang lumapot tulad ng pandikit
              </Text>
              <View className='flex flex-col gap-y-2'>
                {pagGawa3.map((text, index) => (
                  <Text key={index}>{`\u2022 ${text}`}</Text>
                ))}
              </View>
            </View>
            <View>
              <Text className='font-bold'>
                4. Palamigin ang nilutong harina at ihalo ang lahat ng mga
                sangkap
              </Text>
            </View>
            <View>
              <Text className='font-bold'>
                5. Masahin at ihulma sa glingan (Pelletized) (Steam heat for 5
                minutes- to prolong shelf life) - Patuyuin sa pinong kawad (Wire
                screen) for 2 days. Haluin (baliktarin) Paminsan-minsan habang
                pinatuyo
              </Text>
            </View>
            <View>
              <Text className='font-bold'>
                6. Ilagay ang tuyong pakain (Pelletized) sa sako o plastik bag.
                Imbakin (stored) sa loob ng 3-4 (mos.) buwan
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text className='font-bold text-xl'>
            Lima(5) Aspeto ng Pag-aalaga ng Tilapia
          </Text>
          <View className='flex flex-col gap-y-2'>
            {mahalaga.map((text, index) => (
              <Text key={index}>{`\u2022 ${text}`}</Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
