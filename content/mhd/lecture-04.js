/*
 * Middle High German — Lecture IV: the article, demonstratives, personal and possessive pronouns,
 * and the strong and weak adjective.
 * Reading: Hartmann von Aue, Iwein, lines 1–58, transcribed from the page images of Fedor Bech's edition
 * (Hartmann von Aue, vol. 3, Deutsche Classiker des Mittelalters, Leipzig 1869), pp. 4–5; Bech's metrical
 * accents and elision marks left out.
 * Source panel: Walther von der Vogelweide, L 8,4–17, from the page image of Lachmann's 2nd edition
 * (Berlin 1843), p. 8. Forms checked against Weinhold, Mhd. Grammatik (1877), §§ 486–491. See CONTENT-CHECKS.md.
 */
Viator.addLecture('mhd', {
  id: 'mhd-04',
  number: 4,
  title: 'Künec Artûs der guote',
  subtitle: 'The article, pronouns and the strong and weak adjective; the prologue and opening of Hartmann’s Iwein',
  minutes: 60,

  intro: `
    <p>The small words of Middle High German, the articles and pronouns, are where a German speaker is most likely to read straight past a difference. <span class="la">der, des, dem, den</span> look like modern German and mostly are, but <span class="la">diu</span> and <span class="la">daz</span>, <span class="la">dirre</span> (“dieser”), <span class="la">in</span> (both “ihn” and “ihnen”) and <span class="la">ir</span> (“ihr”, “ihre” and “euch”) need care.</p>
    <p>The adjective has two declensions, as today: the <strong>weak</strong> after the definite article (<span class="la">künec Artûs der guote</span>, “the good King Arthur”), and the <strong>strong</strong> elsewhere (<span class="la">rehte güete</span>, “true goodness”). Two things are new. The strong endings include <span class="la">-iu</span> (<span class="la">ein ganziu krône</span>), and in the nominative the adjective is often left without any ending at all (<span class="la">sô manec guot riter</span>). Adjectives also form their adverbs with <span class="la">-e</span> and without umlaut: <span class="la">schœne</span> “beautiful”, but <span class="la">schône</span> “beautifully”. That adverb is modern <em>schon</em>.</p>
    <p>The reading is the beginning of Hartmann’s <em>Iwein</em>, his second Arthurian romance: a prologue that praises King Arthur, introduces the poet in almost the words of <em>Der arme Heinrich</em>, and then sets the scene at Arthur’s Whitsun feast, ending with Hartmann’s famous reflection on the good old days.</p>
    <p>By the end you should be able to decline the article, <span class="la">dirre</span> and the personal pronouns, choose between strong and weak adjective endings, form adverbs and comparatives, and read the first 58 lines of <em>Iwein</em> with the glosses.</p>
  `,

  background: [
    {
      title: 'Iwein and the Arthurian romance in German',
      html: `
        <p>Hartmann brought the Arthurian romance into German. His <em>Erec</em>, usually dated to the 1180s, is the first; <em>Iwein</em>, probably finished around 1200, is the second. Both follow romances by Chrétien de Troyes; <em>Iwein</em> is an adaptation of Chrétien’s <em>Yvain, ou le Chevalier au lion</em> (about 1177–1181). Hartmann keeps the story but expands the reflections and speeches, and adds passages of his own, the prologue among them.</p>
        <p>The plot runs in two halves. Iwein, a knight of Arthur’s court, defends a magic spring, kills its lord and marries his widow, Laudine. He then leaves with Gawein to win fame at tournaments, promising to return within a year, and forgets. Laudine renounces him; he goes mad in the forest. Cured, he wins back his honour in a series of adventures, with a lion that he has rescued from a dragon as his companion, until he is reconciled with Laudine. The question the romance asks is how a knight balances <span class="la">êre</span>, fame in the world, with <span class="la">triuwe</span>, loyalty to his wife and his word.</p>
        <p><em>Iwein</em> was much read. It survives in some thirty manuscripts and fragments, and was painted on the walls of Rodenegg castle in South Tyrol in the early 13th century. The exact counts and dates are in the reference works; they change as fragments are found.</p>
      `
    },
    {
      title: 'Arthur, the Bretons and the good old days',
      html: `
        <p>The prologue uses Arthur as proof of its opening sentence: whoever strives for true goodness gains happiness and honour. Arthur lived so well that his name still wears the crown of honour. Hartmann adds that Arthur’s countrymen are right in one sense when they say that he is still alive. This alludes to the belief, attested from the 12th century, that Arthur had not died but would return, the so-called Breton hope. Hartmann’s answer is precise: his body is dead, his name lives. Whether this is gentle irony at the Bretons’ expense or simply a courtly compliment is a matter of reading.</p>
        <p>The last ten lines of the reading are often quoted. Hartmann regrets that such joy as at Arthur’s court can no longer be had, and then turns the lament round: he would not have wanted to live then at the price of not living now, because we can still enjoy the stories, as they enjoyed the deeds. It is a defence of literature, and of the present, inside a romance about the past.</p>
      `
    },
    {
      title: 'Bech’s edition',
      html: `
        <p>Our text comes from Fedor Bech’s edition of 1869, published in a series of classic medieval German texts for general readers, with explanations in German at the foot of each page. Bech says in his introduction that he largely followed Karl Lachmann’s method, which takes the least revised manuscript, a Heidelberg one, as its base, but that the Heidelberg scribe’s language, a Central German coloured with Low German forms, is far from the poet’s, so that the other manuscripts often had to decide the reading. Here and there he restored readings that Lachmann had changed only to fit his rules of metre.</p>
        <p>Bech marks the metre in his text. Accents show unusual stresses (<span class="la">únséren</span>, <span class="la">dén</span>), and a hook under an <span class="la">e</span> shows that it is elided in reading aloud (<span class="la">liebtę, undę</span>). These marks are left out here. He also prints <span class="la">riter</span> with a short <span class="la">i</span> and a single <span class="la">t</span>; other editions write <span class="la">rîter</span> or <span class="la">ritter</span> (Lecture I). Several reading notes below quote Bech’s own explanations.</p>
      `
    },
    {
      title: 'Why German has two adjective declensions',
      html: `
        <p>The double adjective is a Germanic invention. The weak forms, with <span class="la">-en</span> like the weak nouns, seem originally to have picked out a particular person or thing (“the good one”); this is why they go with the definite article, which already does that job. The strong forms took over the endings of the demonstrative pronoun: <span class="la">guoter</span> like <span class="la">der</span>, <span class="la">guotez</span> like <span class="la">daz</span>, <span class="la">guotes</span> like <span class="la">des</span>. Hence the modern rule that the ending is “strong” when there is no article to carry it.</p>
        <p>Middle High German also keeps forms without any ending, especially in the nominative. Weinhold’s grammar explains them as the remains of an older, noun-like declension of the adjective. Modern German has kept them only in the predicate (<em>er ist gut</em>), in fixed phrases (<em>gut Ding will Weile haben</em>) and after <em>ein</em> in the neuter (<em>ein gutes</em> but <em>ein gut Teil</em>).</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Ich saz ûf eime steine,<br>und dahte bein mit beine:<br>dar ûf sazt ich den ellenbogen:<br>ich hete in mîne hant gesmogen<br>daz kinne und ein mîn wange.<br>dô dâhte ich mir vil ange,<br>wie man zer welte solte leben:<br>deheinen rât kond ich gegeben,<br>wie man driu dinc erwurbe,<br>der keines niht verdurbe.<br>diu zwei sint êre und varnde guot,<br>daz dicke ein ander schaden tuot:<br>daz dritte ist gotes hulde,<br>der zweier übergulde.</p>
    <p>“I sat on a stone and crossed one leg over the other; on it I set my elbow; I had nestled my chin and one of my cheeks in my hand. Then I thought very anxiously how one should live in the world. I could find no advice on how to gain three things without any of them being lost. Two are honour and transient wealth, which often harm each other; the third is God’s grace, worth more than both.” Walther von der Vogelweide, L 8,4–17, from Lachmann’s 2nd edition (Berlin 1843), p. 8. The Codex Manesse portrait of Walther in Lecture I shows him in exactly this pose.</p>
    <p>Almost every small word in the passage belongs to this lecture: <span class="la">eime</span>, a contracted dative of <span class="la">ein</span>; <span class="la">ein mîn wange</span>, “one of my cheeks”, with <span class="la">ein</span> before a possessive; <span class="la">zer welte</span> = <span class="la">ze der welte</span>; <span class="la">der keines</span>, “none of which”; <span class="la">diu zwei</span>, neuter plural; <span class="la">der zweier</span>, genitive, “than the two”. <span class="la">dahte</span>, “covered”, and <span class="la">dâhte</span>, “thought”, are different verbs (Lecture V).</p>
  `,

  pronunciation: `
    <h3>iu is a long ü</h3>
    <p>The <span class="la">iu</span> of <span class="la">diu, disiu, ganziu, iu, iuch, iuwer</span> is not a diphthong but a long <em>ü</em>, as in <em>Mühle</em>. In the stressed pronouns it later became <em>eu</em> (<span class="la">iu, iuch</span> → <em>euch</em>); in the unstressed adjective ending it was reduced to <em>e</em> (<span class="la">guotiu</span> → <em>gute</em>).</p>
    <h3>Short and long pronouns</h3>
    <p><span class="la">ër</span> and <span class="la">ëz</span> have the open <em>e</em> of <em>Bett</em>. <span class="la">si</span> and <span class="la">sî</span>, <span class="la">wir</span> and <span class="la">wîr</span> alternate: pronouns were long when stressed and short when not, and editors mark the length as they hear it in the verse. Bech prints <span class="la">sî jehent</span> with a long vowel at the start of a line.</p>
    <h3>Pronouns lean on their neighbours</h3>
    <p>Unstressed pronouns and particles attach to the word before or after: <span class="la">hulfe’z</span> = <span class="la">hulfe ez</span>, <span class="la">ich’n</span> = <span class="la">ich en</span>, <span class="la">z’einen</span> = <span class="la">ze einen</span>. Read them as one word, as the verse requires.</p>
  `,

  grammar: [
    {
      title: '1. The definite article',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Masc.</th><th>Neut.</th><th>Fem.</th></tr></thead>
          <tbody>
            <tr><th>Nom. sg.</th><td class="la">der</td><td class="la">daz</td><td class="la">diu</td></tr>
            <tr><th>Gen. sg.</th><td class="la">des</td><td class="la">des</td><td class="la">der</td></tr>
            <tr><th>Dat. sg.</th><td class="la">dem</td><td class="la">dem</td><td class="la">der</td></tr>
            <tr><th>Acc. sg.</th><td class="la">den</td><td class="la">daz</td><td class="la">die</td></tr>
            <tr><th>Instr.</th><td class="la">–</td><td class="la">diu</td><td class="la">–</td></tr>
            <tr><th>Nom./acc. pl.</th><td class="la">die</td><td class="la">diu</td><td class="la">die</td></tr>
            <tr><th>Gen. pl.</th><td class="la">der</td><td class="la">der</td><td class="la">der</td></tr>
            <tr><th>Dat. pl.</th><td class="la">den</td><td class="la">den</td><td class="la">den</td></tr>
          </tbody>
        </table></div>
        <p>Three points. <span class="la">diu</span> is feminine singular and neuter plural: <span class="la">diu werc</span>, “the deeds”. <span class="la">die</span> in the singular is only the feminine accusative. And the neuter has a fifth case, an <strong>instrumental</strong> <span class="la">diu</span>, which survives in phrases: <span class="la">von diu</span> “therefore”, <span class="la">ze diu</span> “for that purpose”, <span class="la">after diu</span> “afterwards”. Its interrogative partner is <span class="la">wiu</span>: <span class="la">ze wiu</span>, “wozu”.</p>
        <p>The same forms serve as the <strong>demonstrative</strong> (“that one”) and the <strong>relative</strong> pronoun, as in modern German: <span class="la">künec Artûs …, der mit riters muote nâch lobe kunde strîten</span>, “who knew how to fight for praise”. <span class="la">daz</span> is also the conjunction <em>dass</em>; there was no difference in spelling.</p>
        <p>Before a vowel and in quick speech the article merges with prepositions: <span class="la">zem</span> (ze dem), <span class="la">zer</span> (ze der), <span class="la">zen</span> (ze den), <span class="la">ime, imme</span> (in dem), <span class="la">ame</span> (an dem), <span class="la">ûfme</span>, <span class="la">ins</span> (in daz). Modern <em>zum, zur, im, am, ins</em> are the survivors. Other contractions (<span class="la">deiswâr</span>, <span class="la">ichn</span>) come in Lecture VII.</p>
      `
    },
    {
      title: '2. dirre, jener, selp, solch',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Masc.</th><th>Neut.</th><th>Fem.</th></tr></thead>
          <tbody>
            <tr><th>Nom. sg.</th><td class="la">dirre, diser</td><td class="la">ditze, diz</td><td class="la">disiu</td></tr>
            <tr><th>Gen. sg.</th><td class="la">dises</td><td class="la">dises</td><td class="la">dirre</td></tr>
            <tr><th>Dat. sg.</th><td class="la">disem</td><td class="la">disem</td><td class="la">dirre</td></tr>
            <tr><th>Acc. sg.</th><td class="la">disen</td><td class="la">ditze, diz</td><td class="la">dise</td></tr>
            <tr><th>Nom./acc. pl.</th><td class="la">dise</td><td class="la">disiu</td><td class="la">dise</td></tr>
            <tr><th>Gen. / dat. pl.</th><td class="la">dirre / disen</td><td class="la">dirre / disen</td><td class="la">dirre / disen</td></tr>
          </tbody>
        </table></div>
        <p><span class="la">dirre</span> is “dieser”. The forms with <span class="la">rr</span> are the trap: <span class="la">dirre</span> can be masculine nominative, feminine genitive or dative, or genitive plural. <span class="la">ditze mære</span> and <span class="la">ditz mære</span>, “this story”, open both the narrative of <em>Der arme Heinrich</em> (Lecture III) and line 30 of <em>Iwein</em>.</p>
        <p><span class="la">jener, jeniu, jenez</span> is “jener” and declines like a strong adjective. <span class="la">selp</span> (“selbst, selbe”) often follows the article: <span class="la">daz selbe pfat</span> (Lecture II). <span class="la">sölch, solch, selch</span> is “solch”: <span class="la">selch vröude</span>, “such joy”.</p>
      `
    },
    {
      title: '3. ein, dehein, manec, al',
      html: `
        <p><strong><span class="la">ein</span></strong> declines like a strong adjective (<span class="la">eines, einem, einen</span>; fem. <span class="la">einer, eine</span>), but is very often left without ending in the nominative singular of all genders and in the neuter accusative: <span class="la">ein riter, ein bœser man, ein wunschleben</span>. The dative is often contracted: <span class="la">eime</span> (Walther: <span class="la">ûf eime steine</span>).</p>
        <ul>
          <li><span class="la">ein</span> can stand before a possessive: <span class="la">ein mîn wange</span>, “one of my cheeks”.</li>
          <li>It has a plural, with nouns that are plural in form but single in sense: <span class="la">z’einen pfingesten</span>, “at a Whitsun feast”. Bech notes that <span class="la">pfingesten</span> is plural; so is modern <em>Pfingsten</em>, an old dative plural, like <em>Weihnachten</em>.</li>
          <li><span class="la">dehein, kein</span> means “any” in questions and conditions and “no” with a negative: <span class="la">deheinen rât kond ich gegeben</span>, “I could give no advice” (Lecture VII).</li>
          <li><span class="la">manec</span>, “many a”, is usually uninflected before its noun and takes a singular: <span class="la">manec maget unde wîp</span>, <span class="la">sô manec guot riter</span>. Modern <em>manch</em>.</li>
          <li><span class="la">al</span> can stand uninflected before the article: <span class="la">al diu werlt</span>, “all the world”. Inflected, it behaves like a strong adjective: <span class="la">in allen den landen</span>, <span class="la">in alle wîs</span>.</li>
        </ul>
      `
    },
    {
      title: '4. Personal pronouns',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>ich</th><th>du</th><th>wir</th><th>ir (you pl.)</th></tr></thead>
          <tbody>
            <tr><th>Nom.</th><td class="la">ich</td><td class="la">du</td><td class="la">wir</td><td class="la">ir</td></tr>
            <tr><th>Gen.</th><td class="la">mîn</td><td class="la">dîn</td><td class="la">unser</td><td class="la">iuwer</td></tr>
            <tr><th>Dat.</th><td class="la">mir</td><td class="la">dir</td><td class="la">uns</td><td class="la">iu</td></tr>
            <tr><th>Acc.</th><td class="la">mich</td><td class="la">dich</td><td class="la">uns</td><td class="la">iuch</td></tr>
          </tbody>
        </table></div>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>ër</th><th>ëz</th><th>si (she)</th><th>si (they)</th></tr></thead>
          <tbody>
            <tr><th>Nom.</th><td class="la">ër</td><td class="la">ëz</td><td class="la">si, sî, siu</td><td class="la">sie, si (n. siu)</td></tr>
            <tr><th>Gen.</th><td class="la">sîn</td><td class="la">ës, sîn</td><td class="la">ir</td><td class="la">ir</td></tr>
            <tr><th>Dat.</th><td class="la">im, ime</td><td class="la">im, ime</td><td class="la">ir</td><td class="la">in</td></tr>
            <tr><th>Acc.</th><td class="la">in</td><td class="la">ëz</td><td class="la">sie, si</td><td class="la">sie, si (n. siu)</td></tr>
          </tbody>
        </table></div>
        <p>The traps for a German reader:</p>
        <ul>
          <li><strong><span class="la">in</span></strong> is “ihn” (acc. sg.) and “ihnen” (dat. pl.). In the reading it is always the plural: <span class="la">ouch wart in dâ ze hove gegeben</span>, “they were given at court”; <span class="la">dâ tâten in diu werc vil wol</span>, “the deeds did them good”.</li>
          <li><strong><span class="la">ir</span></strong> is “ihr” (you, pl.), and also “ihr, ihrer” of <span class="la">si</span>, singular and plural. <span class="la">iu</span> and <span class="la">iuch</span> are both “euch”: dative and accusative.</li>
          <li>The <strong>genitive</strong> forms are used as objects, as in Lecture III: <span class="la">des gît gewisse lêre</span>, “of this he gives sure proof”; <span class="la">ich gedenke dîn</span>, “I think of you”. <span class="la">mîn, dîn</span> here are not possessives.</li>
          <li><strong>sich</strong> is accusative only. For the dative Middle High German uses the ordinary pronoun: <span class="la">er nam im ein wîp</span>, “he took a wife for himself”; Lecture I had <span class="la">er nam im manege schouwe</span>, “he took many a look for himself”. Dative <em>sich</em> spread later, from the centre of the German area.</li>
        </ul>
      `
    },
    {
      title: '5. Possessives',
      html: `
        <p><span class="la">mîn, dîn, sîn, unser, iuwer</span> decline like strong adjectives, but in the nominative singular (and often the accusative) they usually stand without ending: <span class="la">sîn name, mîn wange, sîn hûs</span>. <span class="la">sîn</span> belongs to <span class="la">ër</span> and <span class="la">ëz</span>.</p>
        <p>For “her” and “their” Middle High German uses <span class="la">ir</span>, originally the genitive of <span class="la">si</span>, and it mostly stays uninflected: <span class="la">ir mære</span>, “their story”; <span class="la">ir hant</span>, “her hand”; <span class="la">ir kint</span>, “her child” or “their children”. The inflected modern <em>ihre, ihren</em> developed in the later Middle Ages. So <span class="la">ir</span> before a noun can be “her” or “their”, and only the context tells you which.</p>
      `
    },
    {
      title: '6. The strong and weak adjective',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Strong</th><th>Masc.</th><th>Neut.</th><th>Fem.</th></tr></thead>
          <tbody>
            <tr><th>Nom. sg.</th><td class="la">guoter</td><td class="la">guotez</td><td class="la">guotiu</td></tr>
            <tr><th>Gen. sg.</th><td class="la">guotes</td><td class="la">guotes</td><td class="la">guoter</td></tr>
            <tr><th>Dat. sg.</th><td class="la">guotem</td><td class="la">guotem</td><td class="la">guoter</td></tr>
            <tr><th>Acc. sg.</th><td class="la">guoten</td><td class="la">guotez</td><td class="la">guote</td></tr>
            <tr><th>Nom./acc. pl.</th><td class="la">guote</td><td class="la">guotiu</td><td class="la">guote</td></tr>
            <tr><th>Gen. / dat. pl.</th><td class="la">guoter<br>guoten</td><td class="la">guoter<br>guoten</td><td class="la">guoter<br>guoten</td></tr>
          </tbody>
        </table></div>
        <div class="tablewrap"><table>
          <thead><tr><th>Weak</th><th>Masc.</th><th>Neut.</th><th>Fem.</th></tr></thead>
          <tbody>
            <tr><th>Nom. sg.</th><td class="la">guote</td><td class="la">guote</td><td class="la">guote</td></tr>
            <tr><th>Gen. / dat. sg.</th><td class="la">guoten</td><td class="la">guoten</td><td class="la">guoten</td></tr>
            <tr><th>Acc. sg.</th><td class="la">guoten</td><td class="la">guote</td><td class="la">guoten</td></tr>
            <tr><th>Plural</th><td class="la">guoten</td><td class="la">guoten</td><td class="la">guoten</td></tr>
          </tbody>
        </table></div>
        <ul>
          <li><strong>Weak</strong> after the definite article and after <span class="la">dirre, jener</span>: <span class="la">der arbeitsame last</span> (Lecture III), <span class="la">die schœnsten</span>. An adjective after a name takes the article and is weak: <span class="la">künec Artûs der guote</span>, like <em>Karl der Große</em>.</li>
          <li><strong>Strong</strong> where there is no article: <span class="la">rehte güete</span>, <span class="la">nâch rîcher gewonheit</span>, <span class="la">lasterlîcher schame</span>, <span class="la">in vil swachem werde</span>.</li>
          <li><strong>Uninflected</strong> in the nominative singular of all genders and the neuter accusative, especially after <span class="la">ein, manec</span> and the possessives: <span class="la">sô manec guot riter</span>, <span class="la">ein alsô schœne hôchzît</span>. The inflected form is also possible: <span class="la">ein bœser man</span>.</li>
          <li><strong>Predicative</strong> adjectives have no ending, as today: <span class="la">er was hübesch und dar zuo wîs</span>.</li>
        </ul>
        <p>The ending <span class="la">-iu</span> (feminine nominative singular, neuter plural) is the one that looks strangest: <span class="la">ganziu krône, glîchiu wâge</span> in Lecture III. It became <em>-e</em>: <em>ganze Krone</em>.</p>
      `
    },
    {
      title: '7. Comparison and adverbs',
      html: `
        <p>The comparative ends in <span class="la">-er</span> and the superlative in <span class="la">-est</span>, often with umlaut: <span class="la">schœne, schœner, schœnest</span>; <span class="la">lanc, lenger, lengest</span>. In the reading: <span class="la">deheine schœner</span>, “none more beautiful”; <span class="la">die schœnsten</span>. Irregular as today: <span class="la">guot, bezzer, beste</span>; <span class="la">übel, wirser, wirste</span>; <span class="la">michel, mêre, meiste</span>; <span class="la">lützel, minner, minnest</span>. <span class="la">wirser</span> and <span class="la">minner</span> have been replaced by <em>schlechter</em> and <em>weniger</em>.</p>
        <p><strong>Adverbs</strong> are formed with <span class="la">-e</span>, and where the adjective has umlaut, the adverb does not:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Adjective</th><th>Adverb</th><th>Modern</th></tr></thead>
          <tbody>
            <tr><td class="la">schœne</td><td class="la">schône</td><td><em>schon</em> (“already”, originally “beautifully, completely”)</td></tr>
            <tr><td class="la">veste</td><td class="la">vaste</td><td><em>fast</em> (“almost”, originally “firmly”)</td></tr>
            <tr><td class="la">spæte</td><td class="la">spâte</td><td><em>spät</em></td></tr>
            <tr><td class="la">süeze</td><td class="la">suoze</td><td><em>süß</em></td></tr>
            <tr><td class="la">guot</td><td class="la">wol</td><td><em>wohl, gut</em></td></tr>
          </tbody>
        </table></div>
        <p>The reading has both: <span class="la">gelebet alsô schône</span>, “lived so splendidly” (adverb), and <span class="la">ein alsô schœne hôchzît</span>, “so splendid a festival” (adjective). Adverbs are also made with <span class="la">-lîche</span> or <span class="la">-lîchen</span>: <span class="la">wærlîchen</span>, “truly”.</p>
      `
    }
  ],

  vocab: [
    // nouns
    { id: 'guete', head: 'güete', la: 'güete', g: 'f', pos: 'noun', en: 'goodness; kindness; excellence', de: 'Güte; Vortrefflichkeit', note: 'Bech: here in the sense of Tugend, Edelmut.' },
    { id: 'gemuete', head: 'gemüete', la: 'gemüete', g: 'n', pos: 'noun', en: 'mind, disposition, feelings', de: 'Gemüt, Sinn, Gesinnung' },
    { id: 'saelde', head: 'sælde', la: 'sælde', g: 'f', pos: 'noun', en: 'happiness, blessing; good fortune; salvation', de: 'Glück, Segen, Heil', note: 'Related to sælic (selig). Also personified: vrou Sælde.' },
    { id: 'lere', head: 'lêre', la: 'lêre', g: 'f', pos: 'noun', en: 'teaching; example, proof', de: 'Lehre; Beispiel, Beweis' },
    { id: 'kunec', head: 'künec', la: 'künec, küneges', g: 'm', pos: 'noun', en: 'king', de: 'König', note: 'Often uninflected before a name: des künec Artûses.' },
    { id: 'schame', head: 'schame', la: 'schame', g: 'f', pos: 'noun', en: 'shame, disgrace', de: 'Scham; Schande' },
    { id: 'site', head: 'site', la: 'site, sites', g: 'm', pos: 'noun', en: 'custom, manner, way of life', de: 'Sitte, Brauch, Art', note: 'Masculine, unlike modern die Sitte.' },
    { id: 'vliz', head: 'vlîz', la: 'vlîz, vlîzes', g: 'm', pos: 'noun', en: 'diligence, effort, care', de: 'Fleiß, Eifer, Sorgfalt' },
    { id: 'hof', head: 'hof', la: 'hof, hoves', g: 'm', pos: 'noun', en: 'court; courtyard; farm', de: 'Hof', note: 'ze hove, at court: dative with -e. hövesch, hübesch, courtly, comes from it.' },
    { id: 'hochzit', head: 'hôchzît', la: 'hôchzît, hôchgezît', g: 'f', pos: 'noun', en: 'high feast, festival', de: 'hohes Fest, Festlichkeit', note: 'False friend: any great church or court festival; Hochzeit, wedding, is a later narrowing.' },
    { id: 'gewonheit', head: 'gewonheit', la: 'gewonheit', g: 'f', pos: 'noun', en: 'custom, habit', de: 'Gewohnheit, Brauch' },
    { id: 'wert', head: 'wërt', la: 'wërt, wërdes', g: 'm', pos: 'noun', en: 'worth, value; esteem, dignity', de: 'Wert; Ansehen, Würde', note: 'in vil swachem werde: in very low esteem. Also neuter.' },
    { id: 'maget', head: 'maget', la: 'maget, pl. megede', g: 'f', pos: 'noun', en: 'girl, maiden, virgin', de: 'Mädchen, Jungfrau', note: 'False friend: not a maidservant (Magd). Mädchen is its diminutive. diu reine maget: the Virgin Mary.' },
    { id: 'werc', head: 'wërc', la: 'wërc, wërkes', g: 'n', pos: 'noun', en: 'work, deed', de: 'Werk, Tat' },
    { id: 'riche', head: 'rîche', la: 'rîche', g: 'n', pos: 'noun', en: 'realm, kingdom; empire', de: 'Reich', note: 'daz rîche: the Empire. The adjective rîche means mächtig, vornehm, reich.' },
    { id: 'pfingesten', head: 'pfingesten', la: 'pfingesten (plural)', g: 'f', pos: 'noun, plural', en: 'Whitsun, Pentecost', de: 'Pfingsten', note: 'A plural, from Greek pentēkostē; modern Pfingsten is an old dative plural.' },
    // adjectives
    { id: 'reht', head: 'reht', la: 'reht', pos: 'adjective', en: 'right, just; true, real', de: 'recht, richtig; wahr, echt', note: 'rehte güete: true goodness. Adverb rehte: rightly; very.' },
    { id: 'gewis', head: 'gewis', la: 'gewis, gewisses', pos: 'adjective', en: 'certain, sure, reliable', de: 'gewiss, sicher, zuverlässig' },
    { id: 'guot', head: 'guot', la: 'guot; adv. wol', pos: 'adjective', en: 'good; noble, excellent', de: 'gut; edel, vortrefflich', note: 'Bech on künec Artûs der guote: der edele, vortreffliche.' },
    { id: 'boese', head: 'bœse', la: 'bœse', pos: 'adjective', en: 'worthless, base, of low rank; bad', de: 'wertlos, gering, unedel; schlecht', note: 'False friend: rarely “evil”. Lexer: gering, wertlos, nicht von Adel.' },
    { id: 'swach', head: 'swach', la: 'swach', pos: 'adjective', en: 'poor, low, worthless; weak', de: 'gering, niedrig, armselig; schwach', note: 'Often of value or rank, not of strength.' },
    { id: 'schoene', head: 'schœne', la: 'schœne; adv. schône', pos: 'adjective', en: 'beautiful, fine, splendid', de: 'schön, prächtig', note: 'The adverb schône is modern schon.' },
    { id: 'manec', head: 'manec', la: 'manec', pos: 'adjective', en: 'many a, much', de: 'manch, viel', note: 'Usually uninflected, with a singular noun: manec maget unde wîp.' },
    { id: 'lasterlich', head: 'lasterlîch', la: 'lasterlîch', pos: 'adjective', en: 'shameful, disgraceful', de: 'schmachvoll, schändlich', note: 'laster: disgrace, insult (not only vice).' },
    // pronouns
    { id: 'dirre', head: 'dirre', la: 'dirre (diser), disiu, ditze (diz)', pos: 'pronoun', en: 'this', de: 'dieser', note: 'dirre is also fem. gen./dat. sg. and gen. pl.' },
    { id: 'in', head: 'in', la: 'in', pos: 'pronoun', en: 'him (acc.); them (dat.)', de: 'ihn; ihnen', note: 'The commonest misreading in Middle High German.' },
    { id: 'ir', head: 'ir', la: 'ir', pos: 'pronoun', en: 'you (pl.); her, to her (gen./dat.); her, their (possessive)', de: 'ihr; ihrer, ihr; ihr, ihre', note: 'The possessive ir is usually uninflected: ir mære, their story.' },
    // verbs
    { id: 'volgen', head: 'volgen', la: 'volgen', pos: 'verb, weak', en: 'follow (+ dat.)', de: 'folgen' },
    { id: 'tihten', head: 'tihten', la: 'tihten', pos: 'verb, weak', en: 'compose, write (in verse or prose); devise', de: 'dichten, schriftlich abfassen; ersinnen', note: 'From Latin dictare. Not related to dicht (tight).' },
    { id: 'erwerben', head: 'erwërben', la: 'erwërben, erwarp, erwurben, erworben', pos: 'verb, strong III', en: 'obtain, win, earn', de: 'erwerben, erlangen' },
    { id: 'sterben', head: 'stërben', la: 'stërben, starp, sturben, gestorben', pos: 'verb, strong III', en: 'die', de: 'sterben', note: 'ist im der lîp erstorben: if his body has died.' },
    { id: 'genesen', head: 'genësen', la: 'genësen, genas, genâsen, genësen', pos: 'verb, strong V', en: 'survive, be saved; recover; live', de: 'am Leben bleiben, gerettet werden; genesen', note: 'Bech on line 53: leben, durchkommen.' },
    { id: 'lieben', head: 'lieben', la: 'lieben', pos: 'verb, weak', en: 'make dear, make pleasant (+ dat. and acc.); be dear', de: 'lieb machen, angenehm machen', note: 'in liebte den hof: made the court pleasant for them.' },
    { id: 'jamern', head: 'jâmern', la: 'jâmern (mich jâmert)', pos: 'verb, weak', en: 'grieve, distress (impersonal: it grieves me)', de: 'jammern; es jammert mich' }
  ],

  grammarCards: [
    { id: 'mh4-diu', front: 'diu: which forms?', back: 'Fem. nom. sg.; neut. nom./acc. pl.; neut. instrumental (von diu, ze diu)' },
    { id: 'mh4-instr', front: 'von diu; ze wiu', back: 'therefore; to what end (wozu): instrumental of daz and waz' },
    { id: 'mh4-contr', front: 'zem, zer, zen, ime, ame, ins', back: 'ze dem, ze der, ze den, in dem, an dem, in daz' },
    { id: 'mh4-dirre', front: 'dirre: which forms?', back: 'Masc. nom. sg.; fem. gen./dat. sg.; gen. pl. (dieser)' },
    { id: 'mh4-ditze', front: 'ditze / diz mære', back: 'this story (neuter of dirre)' },
    { id: 'mh4-ein', front: 'ein mîn wange', back: 'one of my cheeks: ein before a possessive' },
    { id: 'mh4-einen', front: 'z’einen pfingesten', back: 'at a Whitsun feast: ein in the plural (Pfingsten is plural)' },
    { id: 'mh4-manec', front: 'manec maget unde wîp', back: 'many a maiden and lady: manec uninflected, singular noun' },
    { id: 'mh4-in', front: 'in', back: 'ihn (acc. sg.) or ihnen (dat. pl.)' },
    { id: 'mh4-ir', front: 'ir', back: 'ihr (you pl.); ihr/ihrer (of/to her); ihr/ihre (her, their: possessive, uninflected)' },
    { id: 'mh4-iu', front: 'iu; iuch', back: 'euch (dat.); euch (acc.)' },
    { id: 'mh4-sich', front: 'er nam im ein wîp', back: 'he took a wife for himself: no dative sich, the ordinary pronoun im' },
    { id: 'mh4-strong', front: 'Strong adjective, nom. sg.', back: 'guoter, guotiu, guotez (or uninflected guot)' },
    { id: 'mh4-weak', front: 'Weak adjective endings', back: 'Nom. sg. -e; all other forms -en (neut. and fem. acc. sg.: -e / -en)' },
    { id: 'mh4-artus', front: 'künec Artûs der guote', back: 'good King Arthur: weak adjective with the article after the name' },
    { id: 'mh4-iu-e', front: 'ganziu krône → ?', back: 'ganze Krone: the strong ending -iu became -e' },
    { id: 'mh4-schone', front: 'schœne / schône', back: 'beautiful (adjective) / beautifully (adverb, no umlaut) → schon' },
    { id: 'mh4-vaste', front: 'veste / vaste', back: 'firm / firmly → fast (almost)' },
    { id: 'mh4-comp', front: 'guot, übel, michel, lützel: comparatives', back: 'bezzer, wirser, mêre, minner' },
    { id: 'mh4-boese', front: 'ein bœser man', back: 'a worthless man, of no standing (not an evil one)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'In <span class="la">ouch wart in dâ ze hove gegeben</span>, <span class="la">in</span> means:', options: ['to them', 'him', 'in', 'into'], answer: 0, explain: 'in = ihnen (dat. pl.) here; it can also be ihn (acc. sg.).' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">diu werc</span> means:', options: ['the deeds', 'the deed', 'of the deed', 'to the deeds'], answer: 0, explain: 'diu with a neuter noun is plural.' },
    { id: 'e3', type: 'mc', prompt: 'Why is <span class="la">guote</span> weak in <span class="la">künec Artûs der guote</span>?', options: ['It follows the definite article', 'It is plural', 'It is predicative', 'It is an adverb'], answer: 0, explain: 'Weak after der, as in Karl der Große.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">gelebet alsô schône</span>: <span class="la">schône</span> is', options: ['an adverb: so splendidly', 'an adjective: so beautiful', 'a noun: beauty', 'a verb: spare'], answer: 0, explain: 'Adverbs in -e have no umlaut: schœne → schône (modern schon).' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">ir mære</span> (line 56) means:', options: ['the story of them, their story', 'you tell', 'her horse', 'your story'], answer: 0, explain: 'ir is the uninflected possessive “their”; Bech: die Erzählung ihrer Thaten.' },
    { id: 'e6', type: 'mc', prompt: '<span class="la">er nam im ein wîp</span> means:', options: ['he took a wife for himself', 'he took a wife from him', 'he took him a wife', 'he gave him a wife'], answer: 0, explain: 'No dative sich: im is reflexive here.' },
    { id: 'e7', type: 'mc', prompt: '<span class="la">dirre</span> is <em>not</em>:', options: ['the neuter nominative', 'the masculine nominative', 'the feminine dative', 'the genitive plural'], answer: 0, explain: 'The neuter is ditze, diz.' },
    { id: 'e8', type: 'mc', prompt: '<span class="la">zer welte</span> is short for:', options: ['ze der welte', 'zuo ir welte', 'ze einer welte', 'zer- welte (a prefix)'], answer: 0, explain: 'zer = ze der; modern zur.' },
    { id: 'e9', type: 'mc', prompt: '<span class="la">ein bœser man</span> at Arthur’s court was:', options: ['a man of little worth', 'an evil man', 'an angry man', 'a foreigner'], answer: 0, explain: 'bœse: gering, wertlos, nicht von Adel (Lexer).' },
    { id: 'e10', type: 'mc', prompt: '<span class="la">hôchzît</span> in Iwein means:', options: ['a great festival', 'a wedding', 'midday', 'old age'], answer: 0, explain: 'Any high feast; the sense “wedding” came later.' },
    { id: 'e11', type: 'match', prompt: 'Match the pronouns to modern German.', pairs: [
      ['iu', 'euch (dat.)'], ['iuch', 'euch (acc.)'], ['im', 'ihm'], ['in (dat. pl.)', 'ihnen'], ['uns', 'uns']
    ] },
    { id: 'e12', type: 'match', prompt: 'Match the adjectives and adverbs.', pairs: [
      ['schœne', 'schône'], ['veste', 'vaste'], ['süeze', 'suoze'], ['spæte', 'spâte'], ['guot', 'wol']
    ] },
    { id: 'e13', type: 'gap', prompt: '<span class="la">nâch rîch___ gewonheit</span>', hint: 'strong dat. fem.', answers: ['er'], full: 'nâch rîcher gewonheit', explain: 'Strong feminine dative: -er.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">in vil swach___ werde</span>', hint: 'strong dat. masc.', answers: ['em'], full: 'in vil swachem werde', explain: 'Strong masculine/neuter dative: -em.' },
    { id: 'e15', type: 'gap', prompt: '<span class="la">ein ganz___ krône</span>', hint: 'strong nom. fem., inflected', answers: ['iu'], full: 'ein ganziu krône', explain: 'The strong ending -iu.' },
    { id: 'e16', type: 'gap', prompt: '<span class="la">des guot___ küneges</span>', hint: 'weak gen. sg.', answers: ['en'], full: 'des guoten küneges', explain: 'Weak after the article: -en.' },
    { id: 'e17', type: 'gap', prompt: '<span class="la">___ mære</span> (this story)', hint: 'neuter of dirre', answers: ['ditze', 'diz', 'ditz'], full: 'ditze mære', explain: 'ditze, diz, ditz.' },
    { id: 'e18', type: 'paradigm', prompt: 'Give the strong forms of <span class="la">guot</span> (inflected).', headers: ['Masc.', 'Neut.', 'Fem.'], rows: [
      { label: 'Nom. sg.', answers: ['guoter', 'guotez', 'guotiu'] },
      { label: 'Gen. sg.', answers: ['guotes', 'guotes', 'guoter'] },
      { label: 'Dat. sg.', answers: ['guotem|guoteme', 'guotem|guoteme', 'guoter'] },
      { label: 'Acc. sg.', answers: ['guoten', 'guotez', 'guote'] }
    ] },
    { id: 'e19', type: 'paradigm', prompt: 'Give the forms of the third-person pronouns.', headers: ['ër', 'si (she)', 'si (they)'], rows: [
      { label: 'Gen.', answers: ['sîn', 'ir', 'ir'] },
      { label: 'Dat.', answers: ['im|ime', 'ir', 'in'] },
      { label: 'Acc.', answers: ['in', 'sie|si|sî', 'sie|si|sî'] }
    ] },
    { id: 'e20', type: 'order', prompt: 'Put the German translation in order.', source: 'des gît gewisse lêre künec Artûs der guote', tokens: ['Dafür gibt', 'einen sicheren Beweis', 'der edle', 'König Artus.'], explain: 'des: genitive of daz, “of this”.' },
    { id: 'e21', type: 'translate', dir: 'mhd-de', source: 'Ich gap in mîn guot.', model: 'Ich gab ihnen meinen Besitz.', accepted: ['Ich gab ihnen meinen Besitz', 'Ich gab ihnen mein Gut', 'Ich gab ihnen mein Vermögen'], explain: 'in after gëben is the dative plural, ihnen; “to him” would be im.' },
    { id: 'e22', type: 'translate', dir: 'mhd-de', source: 'Diu schœne maget sanc.', model: 'Das schöne Mädchen sang.', accepted: ['Das schöne Mädchen sang', 'Die schöne Jungfrau sang', 'Die schöne Maid sang'] },
    { id: 'e23', type: 'translate', dir: 'mhd-en', source: 'Dirre riter ist guot.', model: 'This knight is good.', accepted: ['This knight is good', 'This knight is noble', 'This knight is excellent'] },
    { id: 'e24', type: 'translate', dir: 'de-mhd', source: 'Der gute König lebte schön.', model: 'Der guote künec lebete schône.', accepted: ['Der guote künec lebete schône', 'Der guote künec lebte schône'], explain: 'After der the adjective is weak (guote). Schône is the adverb of schœne and has no umlaut; it survives as modern schon.' },
    { id: 'e25', type: 'translate', dir: 'de-mhd', source: 'Ich sehe euch.', model: 'Ich sihe iuch.', accepted: ['Ich sihe iuch', 'Ich sihe iuch an'], explain: 'MHG has i even in the first person (ich sihe), where modern German has ich sehe but du siehst. Iuch (iu = long ü) is modern euch.' },
    { id: 'e26', type: 'mc', prompt: 'Hartmann ends the passage by saying that he would not have wanted to live in Arthur’s time because:', options: ['he would then not be alive now, when we can enjoy the stories', 'Arthur’s court was violent', 'he dislikes kings', 'the Bretons were wrong'], answer: 0, explain: 'ich’n wolde dô niht sîn gewesen, daz ich nû niht enwære.' },
    { id: 'e27', type: 'mc', prompt: 'According to Bech, <span class="la">ez</span> in line 22 (<span class="la">unde ez an den buochen las</span>) refers to:', options: ['ditz mære in line 30', 'the book', 'Arthur’s fame', 'the knight’s hour'], answer: 0, explain: 'Bech takes lines 23–29 as a parenthesis; lines 21, 22 and 30 carry the main thought.' }
  ],

  reading: {
    title: 'Hartmann von Aue, Iwein, lines 1–58',
    note: 'Authentic text: the prologue and the opening scene, transcribed from the page images of Fedor Bech’s edition (Leipzig 1869), pp. 4–5. Bech’s metrical accents and elision marks are left out; the blank lines stand for his paragraph indents. Tap any word.',
    text: 'Swer an rehte güete\nwendet sîn gemüete,\ndem volget sælde und êre.\ndes gît gewisse lêre\nkünec Artûs der guote,\nder mit riters muote\nnâch lobe kunde strîten.\ner hât bî sînen zîten\ngelebet alsô schône,\ndaz er der êren krône\ndô truoc und noch sîn name treit.\ndes habent die wârheit\nsîne lantliute:\nsî jehent er lebe noch hiute:\ner hât den lop erworben,\nist im der lîp erstorben,\nsô lebt doch iemer sîn name.\ner ist lasterlîcher schame\niemer vil gar erwert,\nder noch nâch sînem site vert.\n\nEin riter, der gelêret was\nunde ez an den buochen las,\nswenne er sîne stunde\nniht baz bewenden kunde,\ndaz er ouch tihtennes pflac\n(daz man gerne hœren mac,\ndâ kêrte er sînen vlîz an:\ner was genant Hartman\nund was ein Ouwære),\nder tihte ditz mære.\n\nEz het der künec Artûs\nze Karidôl in sîn hûs\nz’einen pfingesten geleit\nnâch rîcher gewonheit\nein alsô schœne hôchzît,\ndaz er vordes noch sît\ndeheine schœner nie gewan.\ndeiswâr dâ was ein bœser man\nin vil swachem werde:\nwan sich gesament ûf der erde\nbî niemens zîten anderswâ\nsô manec guot riter alsô dâ.\nouch wart in dâ ze hove gegeben\nin alle wîs ein wunschleben:\nin liebte den hof unde den lîp\nmanec maget unde wîp,\ndie schœnsten von den rîchen.\nmich jâmert wærlîchen,\nund hulfe’z iht, ich wolde ez clagen,\ndaz nû bî unseren tagen\nselch vröude niemer werden mac\nder man ze den zîten pflac.\ndoch müezen wir ouch nû genesen.\nich’n wolde dô niht sîn gewesen\ndaz ich nû niht enwære:\ndâ uns noch mit ir mære\nsô rehte wol wesen sol,\ndâ tâten in diu werc vil wol.',
    translations: [
      { label: 'German translation', text: 'Wer sein Streben auf wahre Güte richtet, dem folgen Glück und Ansehen. Dafür gibt einen sicheren Beweis der edle König Artus, der mit ritterlicher Gesinnung um Ruhm zu kämpfen verstand. Er hat zu seiner Zeit so vortrefflich gelebt, dass er damals die Krone der Ehre trug und sein Name sie noch trägt. Darin haben seine Landsleute recht: Sie behaupten, er lebe noch heute. Er hat sich den Ruhm erworben: Ist ihm auch der Leib gestorben, so lebt doch für immer sein Name. Vor schmachvoller Schande ist für immer ganz und gar bewahrt, wer noch nach seiner Art handelt.\n\nEin Ritter, der gelehrt war und es in den Büchern las – wenn er seine Zeit nicht besser verwenden konnte, widmete er sich auch dem Dichten; auf das, was man gern hört, verwandte er seinen Fleiß; er hieß Hartmann und war ein Auer –, der hat diese Geschichte gedichtet.\n\nKönig Artus hatte in Karidol auf seiner Burg zu Pfingsten nach seiner prächtigen Gewohnheit ein so schönes Fest angesetzt, dass er weder vorher noch nachher je ein schöneres hatte. Fürwahr, ein Mann ohne Wert stand dort in sehr geringem Ansehen: Denn nie versammelten sich zu irgendjemandes Zeit anderswo auf Erden so viele gute Ritter wie dort. Auch wurde ihnen dort am Hof in jeder Weise ein vollkommenes Leben bereitet: Viele Mädchen und Frauen, die schönsten aus den Reichen, machten ihnen den Hof und das Leben angenehm. Mich jammert wahrhaftig – und wenn es etwas hülfe, wollte ich es beklagen –, dass in unseren Tagen nie mehr solche Freude entstehen kann, wie man sie zu jenen Zeiten hatte. Doch müssen auch wir jetzt leben. Ich hätte damals nicht leben wollen, wenn ich dafür jetzt nicht lebte: Wo es uns noch mit der Erzählung von ihnen so recht wohl ergehen soll, da taten ihnen die Taten selbst sehr wohl.' },
      { label: 'English translation', text: 'Whoever turns his mind to true goodness will be followed by happiness and honour. Good King Arthur gives sure proof of this, who with a knight’s spirit knew how to fight for praise. He lived so splendidly in his time that he wore the crown of honour then, and his name wears it still. His countrymen are right in this: they say that he is alive today. He has won such fame that, though his body has died, his name lives for ever. Whoever still acts after his manner will always be wholly protected from shameful disgrace.\n\nA knight who was learned and read it in books – when he could put his time to no better use, he also wrote poetry; he applied his diligence to what people like to hear; he was called Hartmann and was a man of Aue – composed this story.\n\nKing Arthur had arranged at his castle of Karidol, for Whitsun, according to his splendid custom, so fine a festival that he never held a finer one before or after. Truly, a man of no worth was held in very low esteem there, for nowhere else on earth, in anyone’s time, did so many good knights gather as there. And at court they were given in every way a life of perfection: many a maiden and lady, the most beautiful from the kingdoms, made the court and life delightful for them. It truly grieves me, and if it helped at all I would lament it, that in our days such joy can never be again as people had in those times. Yet we too must live now. I would not have wished to live then at the price of not living now: where we can still take such delight in the story of them, they took delight in the deeds.' }
    ],
    notes: [
      { ref: 'Swer an rehte güete / wendet sîn gemüete, / dem volget sælde und êre', html: 'A general relative clause with <span class="la">swer</span>, taken up by <span class="la">dem</span>: “whoever …, him follow …”. <span class="la">volgen</span> takes the dative. <span class="la">rehte güete</span>: strong adjective, accusative feminine. Bech glosses <span class="la">güete</span> here as <em>Tugend, Edelmuth</em>, and <span class="la">sælde</span> as <em>Glück</em>.' },
      { ref: 'des gît gewisse lêre / künec Artûs der guote', html: '<span class="la">des</span>: genitive of <span class="la">daz</span>, “of this”. Bech paraphrases: “davon gibt einen untrüglichen Beweis”. <span class="la">gewisse</span> is strong (no article), <span class="la">guote</span> weak (after <span class="la">der</span>).' },
      { ref: 'der mit riters muote', html: '<span class="la">der</span> is the relative pronoun. <span class="la">riters muote</span>: genitive before its noun, “with a knight’s spirit”. Bech: “mit der Gesinnung eines edeln Mannes”.' },
      { ref: 'gelebet alsô schône', html: '<span class="la">schône</span> is the adverb of <span class="la">schœne</span>; compare <span class="la">ein alsô schœne hôchzît</span> in line 35.' },
      { ref: 'dô truoc und noch sîn name treit', html: '<span class="la">treit</span> = <span class="la">treget</span>, “trägt”: a contracted present of <span class="la">tragen</span>. Arthur wore the crown of honour; his name still wears it.' },
      { ref: 'des habent die wârheit / sîne lantliute', html: 'Bech: “insofern haben seine Landsleute Recht”. The Bretons were said to believe that Arthur would return (background).' },
      { ref: 'sî jehent er lebe noch hiute', html: '<span class="la">jëhen</span>, “say, claim” (Lecture I). <span class="la">lebe</span> is the present subjunctive of reported speech, as modern <em>er lebe</em>.' },
      { ref: 'er ist lasterlîcher schame / iemer vil gar erwert, / der noch nâch sînem site vert', html: '<span class="la">er … der</span> = “he who”; Bech: <span class="la">er</span> = <em>derjenige</em>. <span class="la">erwern</span> takes the genitive: protected from shameful disgrace. <span class="la">site</span> is masculine. <span class="la">varn</span> here means “act, live” (Bech).' },
      { ref: 'Ein riter, der gelêret was / unde ez an den buochen las', html: 'Almost the opening of <em>Der arme Heinrich</em> (Lecture I). Bech explains that lines 21, 22 and 30 carry the main sentence and lines 23–29 are a parenthesis; so <span class="la">ez</span> points forward to <span class="la">ditz mære</span> in line 30.' },
      { ref: 'daz er ouch tihtennes pflac', html: '<span class="la">tihtennes</span>: genitive of the infinitive <span class="la">tihten</span> used as a noun, the object of <span class="la">pflëgen</span>: “he also engaged in composing”.' },
      { ref: 'und was ein Ouwære', html: '<span class="la">Ouwære</span>: a man from Aue, with the suffix <span class="la">-ære</span> of place names, as modern <em>Münchner</em>.' },
      { ref: 'z’einen pfingesten geleit', html: 'Bech: <span class="la">z’einen pfingesten</span> is plural, “auf eine Pfingstzeit”. <span class="la">het … geleit</span>: pluperfect of <span class="la">legen</span>, “had arranged”.' },
      { ref: 'nâch rîcher gewonheit', html: 'Strong adjective, dative feminine. Bech: “in so glänzender, herrlicher Weise als er gewohnt war”.' },
      { ref: 'deiswâr dâ was ein bœser man / in vil swachem werde', html: '<span class="la">deiswâr</span> = <span class="la">daz ist wâr</span>, “truly” (Lecture VII). <span class="la">bœse</span>: of no worth or standing; <span class="la">swach</span>: low. Bech: “in sehr geringem, in gar keinem Ansehen”. Among so many good knights, a worthless man counted for nothing.' },
      { ref: 'ouch wart in dâ ze hove gegeben / in alle wîs ein wunschleben', html: '<span class="la">in</span>: “to them” (dative plural). <span class="la">ze hove</span>: dative of <span class="la">hof</span> with <span class="la">-e</span>. <span class="la">wunschleben</span>: a life that leaves nothing to wish for; Bech: “das vollkommenste, glücklichste … Leben”.' },
      { ref: 'in liebte den hof unde den lîp / manec maget unde wîp', html: '<span class="la">lieben</span> with dative and accusative: “to make something pleasant for someone” (Bech). <span class="la">lîp</span> here is “life”. The subject comes last: many a maiden and lady made the court and life pleasant for them.' },
      { ref: 'die schœnsten von den rîchen', html: 'A superlative with the article, so weak. Bech takes <span class="la">rîchen</span> as the noun <span class="la">rîche</span>: “aus den Ländern des Königs”. It could also be the adjective used as a noun, “of the noble ones”.' },
      { ref: 'und hulfe’z iht, ich wolde ez clagen', html: '<span class="la">hulfe</span>: past subjunctive of <span class="la">hëlfen</span>, from the plural vowel <span class="la">u</span> (Lecture II), as modern <em>hülfe</em>. <span class="la">’z</span> = <span class="la">ez</span>.' },
      { ref: 'selch vröude … / der man ze den zîten pflac', html: '<span class="la">der</span> is a relative pronoun in the genitive, the object of <span class="la">pflëgen</span>: “such joy as people had”. Bech accents <span class="la">dén</span> to show that it carries the stress: those times.' },
      { ref: 'ich’n wolde dô niht sîn gewesen / daz ich nû niht enwære', html: 'Bech: <span class="la">daz … niht</span> = <em>ohne dass</em>. “I would not have wanted to be alive then, if it meant not being alive now.” <span class="la">dô</span> “then” contrasts with <span class="la">dâ</span> “where” in line 56 (Bech).' },
      { ref: 'dâ uns noch mit ir mære … / dâ tâten in diu werc vil wol', html: 'Bech: <span class="la">ir mære</span> = “die Erzählung ihrer Thaten”; <span class="la">diu werc</span> = the deeds themselves, in contrast to the stories. <span class="la">in</span> again “to them”.' }
    ],
    glosses: {
      'swer': 'whoever (wer auch immer)', 'an': 'on, to; in', 'rehte': 'true, right (acc. fem. strong); (adv.) very, rightly', 'güete': 'goodness, virtue', 'wendet': 'turns (wenden)', 'sîn': 'his; (gen.) of him; be (infinitive)', 'gemüete': 'mind, disposition',
      'dem': 'him (dat., takes up swer); the (dat.)', 'volget': 'follows (volgen + dat.)', 'sælde': 'happiness, blessing', 'und': 'and', 'êre': 'honour',
      'des': 'of this (gen. of daz); the (gen.)', 'gît': 'gives (gibt)', 'gewisse': 'certain, sure (strong)', 'lêre': 'teaching; proof, example',
      'künec': 'king', 'artûs': 'Arthur', 'der': 'the; who (relative); he', 'guote': 'good, noble (weak after der)', 'mit': 'with', 'riters': 'knight’s (gen. of riter)', 'muote': 'spirit, mind (dat. of muot)',
      'nâch': 'after; for, in pursuit of', 'lobe': 'praise (dat. of lop)', 'kunde': 'could, knew how to (kunnen)', 'strîten': 'fight',
      'er': 'he', 'hât': 'has', 'bî': 'at, by, in', 'sînen': 'his (dat. pl.)', 'zîten': 'times (dat. pl. of zît)', 'gelebet': 'lived (participle of leben)', 'alsô': 'so', 'schône': 'splendidly, beautifully (adverb)',
      'daz': 'that (dass); the; this', 'êren': 'of honour (gen. of êre)', 'krône': 'crown', 'dô': 'then', 'truoc': 'wore, carried (tragen)', 'noch': 'still; nor', 'name': 'name', 'treit': 'wears, carries (treget, trägt)',
      'habent': 'have', 'die': 'the (pl.)', 'wârheit': 'truth: des habent die wârheit, in this they are right', 'sîne': 'his (pl.)', 'lantliute': 'countrymen, people of his land',
      'sî': 'they', 'jehent': 'say, claim (jëhen)', 'lebe': 'is alive (subjunctive of leben)', 'hiute': 'today (heute)',
      'den': 'the (acc. masc.; dat. pl.)', 'lop': 'praise, fame (Lob)', 'erworben': 'won, earned (erwërben)', 'ist': 'is; (with participle) has', 'im': 'to him, his (dat.)', 'lîp': 'body; life (Leib)', 'erstorben': 'died (erstërben)',
      'sô': 'so, then', 'lebt': 'lives', 'doch': 'yet, still', 'iemer': 'ever, always', 'lasterlîcher': 'shameful (gen. fem. strong)', 'schame': 'disgrace (gen.: from shame)', 'vil': 'very; many', 'gar': 'entirely', 'erwert': 'protected (from + gen.)',
      'sînem': 'his (dat.)', 'site': 'manner, custom (masc.)', 'vert': 'goes; acts, lives (varn)',
      'ein': 'a, an', 'riter': 'knight (Bech’s spelling)', 'gelêret': 'learned (able to read)', 'was': 'was', 'unde': 'and', 'ez': 'it (points forward to ditz mære)', 'buochen': 'books (dat. pl.)', 'las': 'read (lësen)',
      'swenne': 'whenever, when (wann immer)', 'stunde': 'time, hours', 'niht': 'not', 'baz': 'better (adverb of bezzer)', 'bewenden': 'use, spend', 'ouch': 'also', 'tihtennes': 'composing (gen. of the infinitive tihten)', 'pflac': 'engaged in, practised (+ gen.; pflëgen); had',
      'man': 'people, one; man', 'gerne': 'gladly', 'hœren': 'hear', 'mac': 'can, may (mugen)', 'dâ': 'there; where; dâ … an, on that', 'kêrte': 'turned, applied (kêren)', 'vlîz': 'diligence, effort', 'genant': 'called, named',
      'hartman': 'Hartmann', 'ouwære': 'man from Aue', 'tihte': 'composed (tihten)', 'ditz': 'this (neut. of dirre)', 'mære': 'story',
      'het': 'had (hete, preterite of hân)', 'ze': 'at, to; z’ before a vowel', 'karidôl': 'Karidol, Arthur’s castle (often identified with Carlisle)', 'in': 'in, into; to them (dat. pl.); him', 'hûs': 'house; castle',
      'z': 'ze (zu) before a vowel; ez (es) after a verb', 'einen': 'a (pl. with pfingesten)', 'pfingesten': 'Whitsun (plural)', 'geleit': 'laid; arranged (participle of legen)', 'rîcher': 'splendid (dat. fem. strong)', 'gewonheit': 'custom',
      'schœne': 'beautiful, splendid (adjective)', 'hôchzît': 'great festival', 'vordes': 'before, earlier', 'sît': 'since, afterwards', 'deheine': 'any; (with nie) none', 'schœner': 'more beautiful, finer', 'nie': 'never', 'gewan': 'had, obtained (gewinnen)',
      'deiswâr': 'daz ist wâr: truly', 'bœser': 'worthless, of low worth (nom. masc. strong)', 'swachem': 'low, poor (dat. strong)', 'werde': 'esteem, worth (dat. of wërt)',
      'wan': 'for, because', 'sich': 'themselves', 'gesament': 'assembled (gesamenen)', 'ûf': 'on', 'erde': 'earth', 'niemens': 'no one’s (gen. of niemen)', 'anderswâ': 'elsewhere', 'manec': 'many a', 'guot': 'good (uninflected)',
      'wart': 'was (passive: wërden)', 'hove': 'court (dat. of hof)', 'gegeben': 'given', 'alle': 'every, all', 'wîs': 'way, manner (wîse): in alle wîs, in every way', 'wunschleben': 'perfect life, a life to wish for',
      'liebte': 'made pleasant (lieben + dat. and acc.)', 'hof': 'court', 'maget': 'maiden, girl', 'wîp': 'woman, lady', 'schœnsten': 'most beautiful (weak superlative)', 'von': 'from, of', 'rîchen': 'kingdoms (Bech); or: the noble ones',
      'mich': 'me', 'jâmert': 'grieves (mich jâmert, it grieves me)', 'wærlîchen': 'truly (adverb)', 'hulfe': 'would help (subjunctive of hëlfen)', 'iht': 'anything, at all', 'ich': 'I', 'wolde': 'would, wanted (wellen)', 'clagen': 'lament, complain about',
      'nû': 'now', 'unseren': 'our (dat. pl.)', 'tagen': 'days (dat. pl.)', 'selch': 'such (solch)', 'vröude': 'joy', 'niemer': 'never again', 'werden': 'come to be, arise', 'müezen': 'must', 'wir': 'we', 'genesen': 'live, survive (genësen)',
      'n': 'en: negative particle (ich’n = ich en)', 'gewesen': 'been (wësen)', 'enwære': 'were not (en + wære)', 'uns': 'to us, us', 'ir': 'their (possessive, uninflected)', 'wol': 'well', 'wesen': 'be (sîn)', 'sol': 'shall, is to',
      'tâten': 'did (tuon): tâten wol, did good, delighted', 'diu': 'the (neut. pl.)', 'werc': 'deeds (pl.)'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What, according to the first lines, follows whoever strives for true goodness?', options: ['Happiness and honour', 'Wealth and land', 'A long life', 'Fame among the Bretons'], answer: 0, explain: 'dem volget sælde und êre.' },
      { id: 'r2', type: 'mc', prompt: 'In what sense, says Hartmann, does Arthur still live?', options: ['His name lives on', 'He is asleep in a mountain', 'He rules in Britain', 'He lives in Hartmann’s house'], answer: 0, explain: 'ist im der lîp erstorben, sô lebt doch iemer sîn name.' },
      { id: 'r3', type: 'mc', prompt: 'When did Arthur hold his festival at Karidol?', options: ['At Whitsun', 'At Christmas', 'At Easter', 'At midsummer'], answer: 0, explain: 'z’einen pfingesten.' },
      { id: 'r4', type: 'mc', prompt: 'What consoles Hartmann for living after Arthur’s time?', options: ['We can still enjoy the stories of them', 'His own court is finer', 'The knights of his day are better', 'Arthur will return'], answer: 0, explain: 'dâ uns noch mit ir mære sô rehte wol wesen sol.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">in</span> can mean:', options: ['ihn or ihnen', 'only in', 'ihm', 'ihr'], answer: 0, explain: 'Acc. sg. masc. or dat. pl.' },
      { id: 't2', type: 'mc', prompt: 'Strong nominative singular feminine of <span class="la">guot</span> (inflected):', options: ['guotiu', 'guote', 'guoter', 'guotez'], answer: 0, explain: 'The ending -iu, modern -e.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">iu</span> is:', options: ['euch (dat.)', 'euch (acc.)', 'ihr (nom.)', 'ihnen'], answer: 0, explain: 'iu dat., iuch acc.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">mit guot___ muote</span>', hint: 'strong dat. masc.', answers: ['em', 'eme'], full: 'mit guotem muote', explain: 'Strong dative: -em.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">den guot___ künec</span>', hint: 'weak acc. masc.', answers: ['en'], full: 'den guoten künec', explain: 'Weak: -en.' },
      { id: 't6', type: 'mc', prompt: 'The adverb of <span class="la">veste</span> (firm) is:', options: ['vaste', 'vestlîche', 'veste', 'vestiu'], answer: 0, explain: 'No umlaut in the adverb: vaste, modern fast.' },
      { id: 't7', type: 'mc', prompt: '<span class="la">diu</span> before a neuter noun is:', options: ['plural', 'singular', 'genitive', 'dative'], answer: 0, explain: 'Neuter nom./acc. plural.' },
      { id: 't8', type: 'mc', prompt: 'Comparative of <span class="la">guot</span>:', options: ['bezzer', 'guoter', 'güeter', 'wirser'], answer: 0, explain: 'guot, bezzer, beste.' },
      { id: 't9', type: 'translate', dir: 'mhd-de', source: 'manec maget unde wîp', model: 'manches Mädchen und manche Frau', accepted: ['manches Mädchen und manche Frau', 'manches Mädchen und Frau', 'viele Mädchen und Frauen', 'manche Jungfrau und Frau', 'manche Jungfrau und manche Frau'] },
      { id: 't10', type: 'translate', dir: 'de-mhd', source: 'diese Geschichte', model: 'ditze mære', accepted: ['ditze mære', 'diz mære', 'ditz mære', 'disiu mære'], explain: 'Ditze (diz) is the neuter of dirre “this”. Mære “story, report” is usually neuter; its diminutive gave modern Märchen.' },
      { id: 't11', type: 'mc', prompt: 'Hartmann’s <em>Iwein</em> is an adaptation of a romance by:', options: ['Chrétien de Troyes', 'Wolfram von Eschenbach', 'Geoffrey of Monmouth', 'Walther von der Vogelweide'], answer: 0, explain: 'Chrétien’s Yvain, ou le Chevalier au lion.' },
      { id: 't12', type: 'mc', prompt: '<span class="la">ein bœser man</span> in Iwein is:', options: ['a man of no worth', 'a wicked man', 'an angry man', 'a stranger'], answer: 0, explain: 'bœse: of low worth or standing.' }
    ]
  },

  reference: [
    { title: 'Definite article', headers: ['', 'Masc.', 'Neut.', 'Fem.'], rows: [
      ['Nom. sg.', 'der', 'daz', 'diu'], ['Gen. sg.', 'des', 'des', 'der'], ['Dat. sg.', 'dem', 'dem', 'der'], ['Acc. sg.', 'den', 'daz', 'die'], ['Instr.', '–', 'diu', '–'],
      ['Nom./acc. pl.', 'die', 'diu', 'die'], ['Gen. pl.', 'der', 'der', 'der'], ['Dat. pl.', 'den', 'den', 'den']
    ] },
    { title: 'Personal pronouns', headers: ['', 'Nom.', 'Gen.', 'Dat.', 'Acc.'], rows: [
      ['1 sg.', 'ich', 'mîn', 'mir', 'mich'], ['2 sg.', 'du', 'dîn', 'dir', 'dich'], ['3 m.', 'ër', 'sîn', 'im(e)', 'in'], ['3 n.', 'ëz', 'ës, sîn', 'im(e)', 'ëz'], ['3 f.', 'si, sî, siu', 'ir', 'ir', 'sie, si'],
      ['1 pl.', 'wir', 'unser', 'uns', 'uns'], ['2 pl.', 'ir', 'iuwer', 'iu', 'iuch'], ['3 pl.', 'sie, si', 'ir', 'in', 'sie, si']
    ] },
    { title: 'Strong adjective', headers: ['', 'Masc.', 'Neut.', 'Fem.'], rows: [
      ['Nom. sg.', 'guoter', 'guotez', 'guotiu'], ['Gen. sg.', 'guotes', 'guotes', 'guoter'], ['Dat. sg.', 'guotem', 'guotem', 'guoter'], ['Acc. sg.', 'guoten', 'guotez', 'guote'],
      ['Nom./acc. pl.', 'guote', 'guotiu', 'guote'], ['Gen. pl.', 'guoter', 'guoter', 'guoter'], ['Dat. pl.', 'guoten', 'guoten', 'guoten']
    ] },
    { title: 'Weak adjective', headers: ['', 'Masc.', 'Neut.', 'Fem.'], rows: [
      ['Nom. sg.', 'guote', 'guote', 'guote'], ['Gen./dat. sg.', 'guoten', 'guoten', 'guoten'], ['Acc. sg.', 'guoten', 'guote', 'guoten'], ['Plural', 'guoten', 'guoten', 'guoten']
    ] },
    { title: 'dirre (this)', headers: ['', 'Masc.', 'Neut.', 'Fem.'], rows: [
      ['Nom. sg.', 'dirre, diser', 'ditze, diz', 'disiu'], ['Gen. sg.', 'dises', 'dises', 'dirre'], ['Dat. sg.', 'disem', 'disem', 'dirre'], ['Acc. sg.', 'disen', 'ditze, diz', 'dise'],
      ['Nom./acc. pl.', 'dise', 'disiu', 'dise'], ['Gen. pl.', 'dirre', 'dirre', 'dirre'], ['Dat. pl.', 'disen', 'disen', 'disen']
    ] }
  ]
});
