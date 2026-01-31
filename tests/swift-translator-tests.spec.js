const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    // Simple Sentences
    {
      tcId: 'Pos_Fun_001',
      name: 'Convert a short daily greeting phrase',
      input: 'obata suba dhavasak!',
      expected: 'ඔබට සුබ දවසක්!',
    },
    {
      tcId: 'Pos_Fun_002',
      name: 'Long mixed-language input',
      input: 'Heta havasata anivaaryenma notepad++, Chrome, Edge, Firefox, Adobe patch tika test branch ekata dhaanna oonee. Anith ekathamayi mee sathiya aethulatha department ekee PC okkogema VA fix karannath oonee mokadha mee maase anthima vedhdhi audit report eka finalize karanna oenee. mama dhanna vidhihata audit eken next month mula enavaa check karanna',
      expected: 'හෙට හවසට අනිවාර්යෙන්ම notepad++, Chrome, Edge, Firefox, Adobe patch ටික test branch එකට දාන්න ඕනේ. අනිත් එකතමයි මේ සතිය ඇතුලත department එකේ PC ඔක්කොගෙම VA fix කරන්නත් ඕනේ මොකද මේ මාසෙ අන්තිම වෙද්දි audit report එක finalize කරන්න ඔඑනේ. මම දන්න විදිහට audit එකෙන් next month මුල එනවා check කරන්න',
    },
    {
      tcId: 'Pos_Fun_003',
      name: 'Convert a short question',
      input: 'mahaththayaa dhaane Bhaara gaththaa neidha?',
      expected: 'මහත්තයා දානෙ භාර ගත්තා නේද?',
    },
    
    {
      tcId: 'Pos_Fun_004',
      name: 'Convert an explanatory request phrase',
      input: 'menna mei vachanayee theeruma kiyala dhennakoo',
      expected: 'මෙන්න මේ වචනයේ තේරුම කියල දෙන්නකෝ',
    },
    {
      tcId: 'Pos_Fun_005',
      name: 'Convert a simple sentence',
      input: 'mata thibahayi',
      expected: 'මට තිබහයි',
    },
    {
      tcId: 'Pos_Fun_006',
      name: 'Convert a compound sentence',
      input: 'ov eeka hoDHAyi, api heta udhenma pitath vemu',
      expected: 'ඔව් ඒක හොඳයි, අපි හෙට උදෙන්ම පිටත් වෙමු',
    },

    {
      tcId: 'Pos_Fun_007',
      name: 'Convert a complex sentence',
      input: 'adha havasata panthi naeththan sellam karanna yamu',
      expected: 'අද හවසට පන්ති නැත්තන් සෙල්ලම් කරන්න යමු',
    },
    {
      tcId: 'Pos_Fun_008',
      name: 'Convert an imperative phrase',
      input: 'ohoma navathinu!',
      expected: 'ඔහොම නවතිනු!',
    },
    {
      tcId: 'Pos_Fun_009',
      name: 'Convert a negative form phrase',
      input: 'siiruven inna kivvaama pahasuven innavaa, iita passe yudhDheta gihin pissu karanavaa!',
      expected: 'සීරුවෙන් ඉන්න කිව්වාම පහසුවෙන් ඉන්නවා, ඊට පස්සෙ යුද්ධෙට ගිහින් පිස්සු කරනවා!',
    },
    
    {
      tcId: 'Pos_Fun_010',
      name: 'Convert a phrase including measure units',
      input: 'malli mata siini 1kg, thee kudu 500g paekat ekayi, raththi 400g kiri piti pettiyakuyi, chokalat biskat paekat dhekakuyi, dhennako',
      expected: 'මල්ලි මට සීනි 1kg, තේ කුඩු 500g පැකට් එකයි, රත්ති 400g කිරි පිටි පෙට්ටියකුයි, චොකලට් බිස්කට් පැකට් දෙකකුයි, දෙන්නකො',
    },
    {
      tcId: 'Pos_Fun_011',
      name: 'Convert a future tense phrase',
      input: 'mama heta iDHAn hodhata paadam karanavaa',
      expected: 'මම හෙට ඉඳන් හොදට පාඩම් කරනවා',
    },
    
    {
      tcId: 'Pos_Fun_012',
      name: 'Convert a complaint phrase',
      input: 'mama kadeekin bulath vitak gaththa, eeke bulath nae, puvak nae, hunu nae, othapu kolee vitharayi',
      expected: 'මම කඩේකින් බුලත් විටක් ගත්ත, ඒකෙ බුලත් නැ, පුවක් නැ, හුනු නැ, ඔතපු කොලේ විතරයි',
    },
    {
      tcId: 'Pos_Fun_013',
      name: 'Convert a formal announcement',
      input: 'visheeSha niveedhanayayi! 2026/02/01 vana dhina paevathviimata niyamithava thibuu nava kadavatha-raagama tharuNa sQQsadhaya visin sQQviDhaanaya karanu labana vaarshika krikat tharaGaavaliya novaelaekviya heethuvak matha 2026/02/15 vana dhinata kal dhamaa aethi bava karuNaaven dhanvaa sitimu. sthuuthiyi',
      expected: 'විශේෂ නිවේදනයයි! 2026/02/01 වන දින පැවත්වීමට නියමිතව තිබූ නව කඩවත-රාගම තරුණ සංසදය විසින් සංවිධානය කරනු ලබන වාර්ශික ක්‍රිකට් තරඟාවලිය නොවැලැක්විය හේතුවක් මත 2026/02/15 වන දිනට කල් දමා ඇති බව කරුණාවෙන් දන්වා සිටිමු. ස්තූතියි',
    },

    {
      tcId: 'Pos_Fun_014',
      name: 'Convert a short informal command',
      input: 'thava hayiyen dhuvapan',
      expected: 'තව හයියෙන් දුවපන්',
    },
    {
      tcId: 'Pos_Fun_015',
      name: 'Convert a short day-to-day used phrase',
      input: 'patta mahansiyi ban',
      expected: 'පට්ට මහන්සියි බන්',
    },

    {
      tcId: 'Pos_Fun_016',
      name: 'Convert a short statement with abbreviations',
      input: 'mama ikmanatama ATM ekata gihilla ennam',
      expected: 'මම ඉක්මනටම ATM එකට ගිහිල්ල එන්නම්',
    },
    {
      tcId: 'Pos_Fun_017',
      name: 'Convert mixed Sinhala + social media term',
      input: 'mama dhaekka oyaage aluthma tiktok eka',
      expected: 'මම දැක්ක ඔයාගෙ අලුත්ම tiktok එක',
    },

    {
      tcId: 'Pos_Fun_018',
      name: 'Convert a meeting arrangement question',
      input: 'Mokadha kiyanne, heta udhee 9.00ta vagee api hambemudha?',
      expected: 'මොකද කියන්නෙ, හෙට උදේ 9.00ට වගේ අපි හම්බෙමුද?',
      category: 'Daily language usage',
      grammar: 'Plural form',
      length: 'S'
    },

    {
      tcId: 'Pos_Fun_019',
      name: 'Convert a paragraph type input',
      input: 'pakisthaana - shrii lQQkaa eekaabadhDha aarThika komisamee 13 vana saesivaarayata sahaBhaagii wiima saDHAhaa pakisthaana agraamaathYAvarayaagee karmaantha saha niShpaadhana piLibaDHA visheeSha sakaara haruun akthaar KAAn mahathaa saha ohugee niyoojithayan thedhina nila sQQchaarayak saDHAhaa dhivayinata paemiNa thibee.',
      expected: 'පකිස්තාන - ශ්‍රී ලංකා ඒකාබද්ධ ආර්ථික කොමිසමේ 13 වන සැසිවාරයට සහභාගී wඊම සඳහා පකිස්තාන අග්‍රාමාත්‍යවරයාගේ කර්මාන්ත සහ නිෂ්පාදන පිළිබඳ විශේෂ සකාර හරූන් අක්තාර් ඛාන් මහතා සහ ඔහුගේ නියෝජිතයන් තෙදින නිල සංචාරයක් සඳහා දිවයිනට පැමිණ තිබේ.',
    },

    {
      tcId: 'Pos_Fun_020',
      name: 'Convert a short slang phrase',
      input: 'gaemmak bosaa!',
      expected: 'ගැම්මක් බොසා!',
    },
    {
      tcId: 'Pos_Fun_021',
      name: 'Convert a compound sentence',
      input: 'mama kaempas nam enavaa, haebaeyi bas eka parakkuyi',
      expected: 'මම කැම්පස් නම් එනවා, හැබැයි බස් එක පරක්කුයි',
    },

    {
      tcId: 'Pos_Fun_022',
      name: 'Convert a warning phrase',
      input: 'oya eka ekkenaa evana Link, URL obanna yanna epaa',
      expected: 'ඔය එක එක්කෙනා එවන Link, URL ඔබන්න යන්න එපා',
    },

    {
      tcId: 'Pos_Fun_023',
      name: 'Convert a curruncy related phrase',
      input: 'machan Rs.1000k thiyeyidha ganna',
      expected: 'මචන් Rs.1000ක් තියෙයිද ගන්න',
    },

    {
      tcId: 'Pos_Fun_024',
      name: 'Convert a negative phrase',
      input: 'mee paara nam epaavenavaa ban, assignment pirilaa',
      expected: 'මේ පාර නම් එපාවෙනවා බන්, assignment පිරිලා',
    }
  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_001',
      name: 'Convert a future statement',
      input: 'labana september vala mama mage yaaluvoth ekka trip ekak yanna inne',
      expected: 'ලබන september වල මම මගෙ යාලුවොත් එක්ක trip එකක් යන්න ඉන්නේ',
    },
    {
      tcId: 'Neg_Fun_002',
      name: 'Convert a normal  phrase',
      input: 'oyaa man kiyana eka nam wishwaasa karana ekakuth naee',
      expected: 'ඔයා මන් කියන එක නම් විශ්වාස කරන එකකුත් නෑ',
    },
    {
      tcId: 'Neg_Fun_003',
      name: 'Convert a past statement',
      input: 'adha raviDHU caempas ekata caard paek ekak genaavane',
      expected: 'අද රවිඳු කැම්පස් එකට කාර්ඩ් පැක් එකක් ගෙනාවනෙ',
    },
    {
      tcId: 'Neg_Fun_004',
      name: 'Sentence with brand names which embedded with Singlish without spacing',
      input: 'mama adha WhatsApp ekata Zoommeeting ekak join kalaa saha LinkedInprofile eka update kalaa. ',
      expected: 'මම අද WhatsApp එකට Zoommeeting එකක් join කලා සහ LinkedIn එක update කලා. ',
    },
    {
      tcId: 'Neg_Fun_005',
      name: 'Using Capital letters only in a pragraph input',
      input: 'SQQCHAARAKA EQQGALANTHA KANDAAYAMA HAA SHRII LQQKAA KANDAAYAMA ATHARA PAEVAETHVENA THARAGA 3 KIN SAMANVITHA VISSAYI VISSA THARAGAAVALIYEE PALAMU THARAGAYA ADHA (30) PAEVAETHVENAVAA. EE ANUVA THARAGA AARAMBHAYA SADHAHAA VARSHAAVEN BAADHAA ELLAVIIMA HEETHUVEN KAASIYEE VAASIYA PRAMAADHA VUU ATHARA PANDHUVAARA 17 KA THARAGAYAK LESA THARAGAYA PAEVAETHVIIMATA NIYAMITHAYI. THARAGAYEE KISIYEE VAASIYA DHINAAGATH EQQGALANTHA KANDAAYAMA PALAMUVEN PANDHUVATA PAHARADHIIMA SADHAHAA SHRII LQQKAA KANDAAYAMATA AARAADHANAA KALAA',
      expected: 'සංචාරක එංගලන්ත කණ්ඩායම හා ශ්‍රී ලංකා කණ්ඩායම අතර පැවැත්වෙන තරග 3 කින් සමන්විත විස්සයි විස්ස තරගාවලියේ පළමු තරගය අද (30) පැවැත්වෙනවා. ඒ අනුව තරග ආරම්භය සඳහා වර්ශාවෙන් බාධා එල්ලවීම හේතුවෙන් කාසියේ වාසිය ප්‍රමාද වූ අතර පන්දුවාර 17 ක තරගයක් ලෙස තරගය පැවැත්වීමට නියමිතයි. තරගයේ කිසියේ වාසිය දිනාගත් එංගලන්ත කණ්ඩායම පළමු‍වෙන් පන්දුවට පහරදීම සඳහා ශ්‍රී ලංකා කණ්ඩායමට ආරාධනා කළා.',
    },
    {
      tcId: 'Neg_Fun_006',
      name: 'Convert a short form phrase',
      input: 'mis oyaata dhaen otp ekak eyi, eeka poddak kiyannako',
      expected: 'මිස් ඔයාට දැන් OTP එකක් එයි, ඒක පොඩ්ඩක් කියන්නකො',
    },
    {
      tcId: 'Neg_Fun_007',
      name: 'Joined words faliure',
      input: 'hetaapihambemu',
      expected: 'හෙට අපි හම්බෙමු',
    },
    {
      tcId: 'Neg_Fun_008',
      name: 'Using Capital and simple letters one after another',
      input: 'MaMa HeTa KaEmPaS YaNaVaA',
      expected: 'මම හෙට කැම්පස් යනවා',
    },
    {
      tcId: 'Neg_Fun_009',
      name: 'Only using simple letters',
      input: 'lidha laga sqqgamaya adha set velaa vage',
      expected: 'ළිඳ ලඟ සංගමය අද සෙට් වෙලා වගෙ',
    },
    {
      tcId: 'Neg_Fun_010',
      name: 'Convert a normal statement',
      input: 'mama saamaanYEn ganne xl size ekee T-shirt',
      expected: 'මම සාමාන්‍යෙන් ගන්නෙ xl size එකේ T-shirt',
    }
  ],
  
  ui: {
    tcId: 'Pos_UI_001',
    name: 'Sinhala output updates automatically in real-time',
    input: 'meeke mama type karadhdhi ee velaavema anith paththen output eka enavaa',
    partialInput: 'meeke mama type',
    expectedFull: 'මේකෙ මම type කරද්දි ඒ වෙලාවෙම අනිත් පත්තෙන් output එක එනවා',
  }
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 300 });
      
      // Wait for partial output
      await page.waitForTimeout(3000);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
