/*
 * Church calendar for the date converter (Reference → Dates). Shared by all courses.
 * Fixed feasts: m/d. Movable feasts: days from Easter Sunday.
 * Feast days are those of the general Western calendar as given in Grotefend's
 * Taschenbuch der Zeitrechnung; local and diocesan calendars could differ.
 * Middle Low German names are given only where common in the sources; check before relying on them.
 */
Viator.addPage('*', {
  id: 'dates',
  title: 'Dates',
  kind: 'dates',
  defaultFeast: 'john',
  intro: 'Medieval documents date by the church calendar: a feast, or a weekday before or after one. Choose the year, the feast and the relation to get the date.',
  calendarNote: 'Julian for medieval documents. Catholic territories changed from 1582–84, Protestant German territories in 1700, England in 1752, Sweden in 1753.',
  weekdays: {
    mnd: ['mândach', 'dinxedach', 'middeweke', 'donredach', 'vrîdach', 'sunnavent', 'sondach'],
    latin: ['feria secunda', 'feria tertia', 'feria quarta', 'feria quinta', 'feria sexta', 'sabbatum', 'dominica']
  },
  weekdayNote: 'Spellings vary a great deal between scribes and regions (for example dingesdach, mydweken, sonnavend).',
  notes: `
    <h3>Before you rely on a result</h3>
    <ul>
      <li><strong>“After” and “before” are exclusive.</strong> “The Sunday after St John’s Day” is the next Sunday after 24 June, even if 24 June itself was a Sunday.</li>
      <li><strong>The start of the year varied.</strong> Many German chanceries began the year at Christmas, so a date between 25 and 31 December may belong to the year we would call the previous one. Others began it on 25 March or 1 January. Check the custom of the chancery that wrote the document.</li>
      <li><strong>Local calendars differed.</strong> Some saints were kept on different days in different dioceses (Bartholomew on 24 or 25 August; Margaret on 13, 15 or 20 July, which is why she is not in the list). St Matthias moves to 25 February in leap years, and the converter allows for this.</li>
      <li><strong>Gregorian equivalents</strong> for medieval dates are “proleptic”: they show where the day would fall in today’s calendar, which nobody used at the time.</li>
    </ul>
    <p>The standard reference is Hermann Grotefend, <em>Taschenbuch der Zeitrechnung des deutschen Mittelalters und der Neuzeit</em> (first edition 1898), with tables for every year and lists of local feasts.</p>
  `,
  feasts: [
    // fixed feasts
    { id: 'circ', m: 1, d: 1, la: 'Circumcisio Domini', de: 'Neujahr, Beschneidung des Herrn', en: 'Circumcision, New Year' },
    { id: 'epi', m: 1, d: 6, la: 'Epiphania', de: 'Heilige Drei Könige', en: 'Epiphany' },
    { id: 'anton', m: 1, d: 17, la: 'Antonius abbas', de: 'Antonius', en: 'St Anthony' },
    { id: 'fabseb', m: 1, d: 20, la: 'Fabianus et Sebastianus', de: 'Fabian und Sebastian', en: 'SS Fabian and Sebastian' },
    { id: 'agnes', m: 1, d: 21, la: 'Agnes', de: 'Agnes', en: 'St Agnes' },
    { id: 'convpaul', m: 1, d: 25, la: 'Conversio Pauli', de: 'Pauli Bekehrung', en: 'Conversion of St Paul' },
    { id: 'purif', m: 2, d: 2, la: 'Purificatio Mariae', de: 'Mariä Lichtmess', en: 'Candlemas', mnd: 'lichtmisse' },
    { id: 'blas', m: 2, d: 3, la: 'Blasius', de: 'Blasius', en: 'St Blaise' },
    { id: 'agatha', m: 2, d: 5, la: 'Agatha', de: 'Agatha', en: 'St Agatha' },
    { id: 'valent', m: 2, d: 14, la: 'Valentinus', de: 'Valentin', en: 'St Valentine' },
    { id: 'cathpetri', m: 2, d: 22, la: 'Cathedra Petri', de: 'Petri Stuhlfeier', en: 'Chair of St Peter' },
    { id: 'matthias', m: 2, d: 24, leapShift: true, la: 'Matthias apostolus', de: 'Matthias', en: 'St Matthias (25 Feb in leap years)' },
    { id: 'gregor', m: 3, d: 12, la: 'Gregorius papa', de: 'Gregor', en: 'St Gregory' },
    { id: 'gertrud', m: 3, d: 17, la: 'Gertrudis', de: 'Gertrud', en: 'St Gertrude' },
    { id: 'bened', m: 3, d: 21, la: 'Benedictus', de: 'Benedikt', en: 'St Benedict' },
    { id: 'annunt', m: 3, d: 25, la: 'Annuntiatio Mariae', de: 'Mariä Verkündigung', en: 'Annunciation, Lady Day' },
    { id: 'ambros', m: 4, d: 4, la: 'Ambrosius', de: 'Ambrosius', en: 'St Ambrose' },
    { id: 'tiburt', m: 4, d: 14, la: 'Tiburtius', de: 'Tiburtius', en: 'St Tiburtius' },
    { id: 'georg', m: 4, d: 23, la: 'Georgius', de: 'Georg', en: 'St George' },
    { id: 'marcus', m: 4, d: 25, la: 'Marcus evangelista', de: 'Markus', en: 'St Mark' },
    { id: 'philjac', m: 5, d: 1, la: 'Philippus et Iacobus', de: 'Philippus und Jakobus', en: 'SS Philip and James' },
    { id: 'invcruc', m: 5, d: 3, la: 'Inventio crucis', de: 'Kreuzauffindung', en: 'Finding of the Cross' },
    { id: 'urban', m: 5, d: 25, la: 'Urbanus', de: 'Urban', en: 'St Urban' },
    { id: 'bonif', m: 6, d: 5, la: 'Bonifatius', de: 'Bonifatius', en: 'St Boniface' },
    { id: 'vitus', m: 6, d: 15, la: 'Vitus', de: 'Veit', en: 'St Vitus' },
    { id: 'john', m: 6, d: 24, la: 'Nativitas Iohannis Baptistae', de: 'Johannes der Täufer', en: 'St John the Baptist, Midsummer', mnd: 'sunte Johannis dach tô middensomere' },
    { id: 'petpaul', m: 6, d: 29, la: 'Petrus et Paulus', de: 'Peter und Paul', en: 'SS Peter and Paul' },
    { id: 'visit', m: 7, d: 2, la: 'Visitatio Mariae', de: 'Mariä Heimsuchung', en: 'Visitation' },
    { id: 'ulrich', m: 7, d: 4, la: 'Udalricus', de: 'Ulrich', en: 'St Ulrich' },
    { id: 'kilian', m: 7, d: 8, la: 'Kilianus', de: 'Kilian', en: 'St Kilian' },
    { id: 'divap', m: 7, d: 15, la: 'Divisio apostolorum', de: 'Apostelteilung', en: 'Dispersal of the Apostles' },
    { id: 'magd', m: 7, d: 22, la: 'Maria Magdalena', de: 'Maria Magdalena', en: 'St Mary Magdalene' },
    { id: 'jacob', m: 7, d: 25, la: 'Iacobus maior', de: 'Jakobus', en: 'St James' },
    { id: 'anna', m: 7, d: 26, la: 'Anna', de: 'Anna', en: 'St Anne' },
    { id: 'petvinc', m: 8, d: 1, la: 'Petrus ad vincula', de: 'Petri Kettenfeier', en: 'St Peter in Chains, Lammas' },
    { id: 'laur', m: 8, d: 10, la: 'Laurentius', de: 'Laurentius', en: 'St Lawrence' },
    { id: 'assum', m: 8, d: 15, la: 'Assumptio Mariae', de: 'Mariä Himmelfahrt', en: 'Assumption' },
    { id: 'barth', m: 8, d: 24, la: 'Bartholomaeus', de: 'Bartholomäus', en: 'St Bartholomew (25 Aug in some dioceses)' },
    { id: 'decoll', m: 8, d: 29, la: 'Decollatio Iohannis', de: 'Johannes Enthauptung', en: 'Beheading of St John' },
    { id: 'aegid', m: 9, d: 1, la: 'Aegidius', de: 'Ägidius', en: 'St Giles' },
    { id: 'nativmar', m: 9, d: 8, la: 'Nativitas Mariae', de: 'Mariä Geburt', en: 'Nativity of Mary' },
    { id: 'exalt', m: 9, d: 14, la: 'Exaltatio crucis', de: 'Kreuzerhöhung', en: 'Holy Cross Day' },
    { id: 'lamb', m: 9, d: 17, la: 'Lambertus', de: 'Lambert', en: 'St Lambert' },
    { id: 'matth', m: 9, d: 21, la: 'Matthaeus', de: 'Matthäus', en: 'St Matthew' },
    { id: 'maur', m: 9, d: 22, la: 'Mauritius', de: 'Mauritius', en: 'St Maurice' },
    { id: 'michael', m: 9, d: 29, la: 'Michael archangelus', de: 'Michaelis', en: 'Michaelmas', mnd: 'sunte Michaelis dach' },
    { id: 'remig', m: 10, d: 1, la: 'Remigius', de: 'Remigius', en: 'St Remigius' },
    { id: 'dionys', m: 10, d: 9, la: 'Dionysius', de: 'Dionysius', en: 'St Denis' },
    { id: 'gallus', m: 10, d: 16, la: 'Gallus', de: 'Gallus', en: 'St Gall' },
    { id: 'lucas', m: 10, d: 18, la: 'Lucas evangelista', de: 'Lukas', en: 'St Luke' },
    { id: 'xim', m: 10, d: 21, la: 'Undecim milia virginum', de: 'Elftausend Jungfrauen (Ursula)', en: 'Eleven Thousand Virgins' },
    { id: 'simjud', m: 10, d: 28, la: 'Simon et Iudas', de: 'Simon und Judas', en: 'SS Simon and Jude' },
    { id: 'allsaints', m: 11, d: 1, la: 'Omnes sancti', de: 'Allerheiligen', en: 'All Saints', mnd: 'aller hilligen dach' },
    { id: 'allsouls', m: 11, d: 2, la: 'Commemoratio animarum', de: 'Allerseelen', en: 'All Souls' },
    { id: 'martin', m: 11, d: 11, la: 'Martinus', de: 'Martini', en: 'Martinmas' },
    { id: 'elis', m: 11, d: 19, la: 'Elisabeth', de: 'Elisabeth', en: 'St Elizabeth' },
    { id: 'caec', m: 11, d: 22, la: 'Caecilia', de: 'Cäcilia', en: 'St Cecilia' },
    { id: 'clem', m: 11, d: 23, la: 'Clemens', de: 'Clemens', en: 'St Clement' },
    { id: 'cath', m: 11, d: 25, la: 'Katharina', de: 'Katharina', en: 'St Catherine' },
    { id: 'andr', m: 11, d: 30, la: 'Andreas', de: 'Andreas', en: 'St Andrew' },
    { id: 'barb', m: 12, d: 4, la: 'Barbara', de: 'Barbara', en: 'St Barbara' },
    { id: 'nic', m: 12, d: 6, la: 'Nicolaus', de: 'Nikolaus', en: 'St Nicholas' },
    { id: 'concep', m: 12, d: 8, la: 'Conceptio Mariae', de: 'Mariä Empfängnis', en: 'Conception of Mary' },
    { id: 'lucia', m: 12, d: 13, la: 'Lucia', de: 'Lucia', en: 'St Lucy' },
    { id: 'thomas', m: 12, d: 21, la: 'Thomas apostolus', de: 'Thomas', en: 'St Thomas' },
    { id: 'xmas', m: 12, d: 25, la: 'Nativitas Domini', de: 'Weihnachten', en: 'Christmas', mnd: 'wînachten' },
    { id: 'steph', m: 12, d: 26, la: 'Stephanus', de: 'Stephan', en: 'St Stephen' },
    { id: 'johev', m: 12, d: 27, la: 'Iohannes evangelista', de: 'Johannes Evangelist', en: 'St John the Evangelist' },
    { id: 'innoc', m: 12, d: 28, la: 'Innocentes', de: 'Unschuldige Kinder', en: 'Holy Innocents' },
    // movable feasts: days from Easter Sunday
    { id: 'septuag', easter: -63, la: 'Septuagesima', de: 'Septuagesimä', en: 'Septuagesima Sunday' },
    { id: 'sexag', easter: -56, la: 'Sexagesima', de: 'Sexagesimä', en: 'Sexagesima Sunday' },
    { id: 'estomihi', easter: -49, la: 'Esto mihi (Quinquagesima)', de: 'Estomihi', en: 'Quinquagesima Sunday' },
    { id: 'fastn', easter: -47, la: 'Carnisprivium', de: 'Fastnacht', en: 'Shrove Tuesday', mnd: 'vastelâvent' },
    { id: 'ash', easter: -46, la: 'Dies cinerum', de: 'Aschermittwoch', en: 'Ash Wednesday' },
    { id: 'invoc', easter: -42, la: 'Invocavit', de: 'Invocavit', en: '1st Sunday of Lent' },
    { id: 'remin', easter: -35, la: 'Reminiscere', de: 'Reminiscere', en: '2nd Sunday of Lent' },
    { id: 'oculi', easter: -28, la: 'Oculi', de: 'Oculi', en: '3rd Sunday of Lent' },
    { id: 'laetare', easter: -21, la: 'Laetare', de: 'Laetare', en: '4th Sunday of Lent' },
    { id: 'judica', easter: -14, la: 'Iudica', de: 'Judica', en: '5th Sunday of Lent' },
    { id: 'palm', easter: -7, la: 'Palmarum', de: 'Palmsonntag', en: 'Palm Sunday' },
    { id: 'maundy', easter: -3, la: 'Cena Domini', de: 'Gründonnerstag', en: 'Maundy Thursday' },
    { id: 'goodfri', easter: -2, la: 'Parasceve', de: 'Karfreitag', en: 'Good Friday' },
    { id: 'easter', easter: 0, la: 'Pascha', de: 'Ostern', en: 'Easter Sunday', mnd: 'pâschen' },
    { id: 'eastermon', easter: 1, la: 'Feria secunda Paschae', de: 'Ostermontag', en: 'Easter Monday' },
    { id: 'quasimodo', easter: 7, la: 'Quasimodogeniti', de: 'Quasimodogeniti', en: '1st Sunday after Easter' },
    { id: 'miseric', easter: 14, la: 'Misericordias Domini', de: 'Misericordias Domini', en: '2nd Sunday after Easter' },
    { id: 'jubilate', easter: 21, la: 'Iubilate', de: 'Jubilate', en: '3rd Sunday after Easter' },
    { id: 'cantate', easter: 28, la: 'Cantate', de: 'Kantate', en: '4th Sunday after Easter' },
    { id: 'rogate', easter: 35, la: 'Vocem iucunditatis (Rogate)', de: 'Rogate', en: '5th Sunday after Easter' },
    { id: 'ascens', easter: 39, la: 'Ascensio Domini', de: 'Christi Himmelfahrt', en: 'Ascension Day' },
    { id: 'exaudi', easter: 42, la: 'Exaudi', de: 'Exaudi', en: 'Sunday after Ascension' },
    { id: 'pentec', easter: 49, la: 'Pentecostes', de: 'Pfingsten', en: 'Whitsunday', mnd: 'pinxten' },
    { id: 'trinit', easter: 56, la: 'Trinitas', de: 'Trinitatis', en: 'Trinity Sunday' },
    { id: 'corpus', easter: 60, la: 'Corpus Christi', de: 'Fronleichnam', en: 'Corpus Christi (from the 14th century)' }
  ]
});
