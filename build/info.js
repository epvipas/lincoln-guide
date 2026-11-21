// ---------- info ----------
function iref(id, label) { const it = ITEMS.find(x => x.id === id); return `<button class="linkchip" data-goto="${id}" style="color:${CATS[it.cat].color}">${CATS[it.cat].emoji} ${esc(label || it.name)}</button>`; }
function byName(n) { const it = ITEMS.find(x => x.name === n); if (!it) throw new Error('No place called ' + n); return it.id; }
function refs(names) { return names.map(n => iref(byName(n))).join(' '); }
function renderSpecial() {
  const stops = [
    ['Stonebow & Guildhall', 'Start downhill under the 15th-century city gate.'],
    ['High Bridge & the Glory Hole', 'Detour two minutes south to see the Tudor houses on the medieval bridge.'],
    ['Coffee Bobbins', 'Coffee on the Strait, at the foot of the hill.'],
    ['J. Birkett (Birketts)', 'Next door-ish: the famous surplus electronics and radio shop. Check it\'s open.'],
    ['Jew\'s House Restaurant', 'The Jew\'s House, from the 1150s, is one of England\'s oldest town houses.'],
    ['Bunty\'s Tea Room', 'The halfway tea stop.'],
    ['Harding House Gallery', 'Makers\' co-operative for a one-off gift.'],
    ['Hobbsons Restaurant & Pie Shop', 'Past the steepest bit. Norman House, another 12th-century house, is a few doors up.'],
    ['Steep Hill & the Strait', 'Near the top: Mouse House cheese, Imperial Teas and the Wig & Mitre.'],
    ['Lincoln Cathedral', 'Turn right at the top for the Cathedral.'],
    ['Lincoln Castle', 'Or left across Castle Square for Magna Carta and the wall walk.'],
    ['Newport Arch', 'Finish along Bailgate at the Roman arch.'],
  ];
  $('#specialTrail').innerHTML = '<ol>' + stops.map(([n, t]) => `<li style="margin-bottom:8px">${iref(byName(n))}<br>${esc(t)}</li>`).join('') + '</ol>';
}
function renderInfo() {
  const hq = { q: 'Castle Square, Lincoln', name: 'Castle Square Lincoln', ta: true };
  $('#v-info').innerHTML = `
  <div class="hero"><img src="img/cover.svg" alt=""><div class="cap"><span style="color:#FFD23F;font-size:11px;font-weight:800;letter-spacing:2px">YOUR BASE</span><br><b>Castle Square</b><br><span style="font-size:13px">Between the Cathedral and the Castle at the top of Steep Hill. Walking times in the guide are from here.</span></div></div>
  <div class="sec"><h2>🚗 Getting there</h2>
   <img src="img/transit.svg" alt="" style="width:100%;border-radius:12px;aspect-ratio:16/7;object-fit:cover">
   <div class="opt" style="border-color:#6B2E3E"><h4 style="background:#6B2E3E"><span>🅿️ Driving</span><span>park uphill or downhill</span></h4><ol>
    <li>For the Cathedral, Castle and Bailgate, park <b>uphill</b> in the car parks off Westgate or at The Lawn, a short walk from Castle Square.</li>
    <li>For the station, High Street and Brayford, park <b>downhill</b> at the Lincoln Central multi-storey next to the station.</li>
    <li>Walking between the two takes 15–20 minutes up Steep Hill, which is very steep.</li></ol></div>
   <div class="opt" style="border-color:#1877D0"><h4 style="background:#1877D0"><span>🚆 By train</span><span>15–20 min walk uphill</span></h4><ol>
    <li>Lincoln Central station is downhill, by the High Street and the Brayford.</li>
    <li>Walk up the High Street, through the Stonebow, and climb the Strait and Steep Hill to Castle Square.</li></ol></div>
   ${actions(hq, true)}
  </div>
  <div class="sec"><h2>🗓️ Two easy days</h2>
   <div class="day" style="background:#FDE3DF"><b>Day 1 · Cathedral, Castle &amp; Steep Hill:</b> ${refs(['Lincoln Cathedral', 'Lincoln Castle', 'Bailgate shops', 'Newport Arch', 'The Cheese Society', 'Steep Hill & the Strait', 'Harding House Gallery', 'Strugglers Inn', 'Jew\'s House Restaurant'])}</div>
   <div class="day" style="background:#DDEBFA"><b>Day 2 · Museums, river &amp; antiques:</b> ${refs(['Usher Gallery', 'Lincoln Arboretum', 'Stonebow & Guildhall', 'High Bridge & the Glory Hole', 'Brayford Waterfront', 'Back To Mono', 'Cardinal\'s Hat', 'Olé Olé'])}</div>
  </div>
  <div class="sec"><h2>🎨 Gallery hop</h2>
   <div class="day" style="background:#EFE2F8"><b>Uphill galleries:</b> ${refs(['Usher Gallery', 'Spencer Coleman Fine Art', 'The Little Red Gallery', 'Harding House Gallery', 'Indigo Crow'])}</div>
   <div class="day" style="background:#DDEBFA"><b>Downhill galleries:</b> ${refs(['Gallery at St Martin\'s', 'Clarendon Fine Art'])}
    <p style="margin:8px 0 0;font-size:13px">The Little Red Gallery and Spencer Coleman are a minute apart near the Cathedral. Indigo Crow is a short walk west along Burton Road.</p></div>
  </div>
  <div class="sec"><h2>🏺 Antiques &amp; vintage</h2>
   <div class="day" style="background:#FDEFD6"><b>Antiques hunting:</b> ${refs(['Hemswell Antique Centres', 'Westgate Antiques Centre', 'Vintage Flea Market, Lincolnshire Showground', 'Rock Retro'])}
    <p style="margin:8px 0 0;font-size:13px">Hemswell is 20 minutes north and big enough for a whole morning. Combine it with Gainsborough Old Hall.</p></div>
  </div>
  <div class="sec"><h2>🚗 Day trips</h2>
   <div class="day" style="background:#D8F3EE"><b>Houses &amp; castles:</b> ${refs(['Doddington Hall', 'Gainsborough Old Hall', 'Tattershall Castle', 'Belton House'])}</div>
   <div class="day" style="background:#EFE2F8"><b>Planes &amp; pictures:</b> ${refs(['International Bomber Command Centre', 'Lincolnshire Aviation Heritage Centre', 'Kinema in the Woods, Woodhall Spa'])}</div>
  </div>
  <div class="sec"><h2>🎄 What's on this winter</h2><ul>
   <li>The famous Bailgate Christmas market no longer runs. The <b>Cathedral's own Christmas market</b> is on 3–5 December 2026 and is ticketed.</li>
   <li><b>Panto</b> at the New Theatre Royal, 1 Dec–3 Jan (Beauty and the Beast in 2026).</li>
   <li><b>Tattershall Castle</b> has winter opening days in the run-up to Christmas (check dates), and Doddington Hall is famous for its Christmas decorations.</li></ul></div>
  <div class="sec"><h2>🕐 Opening hours</h2><ul>
   <li>The Usher Gallery opens Thursday to Monday, and the Bomber Command Centre is closed on Mondays.</li>
   <li>Steep Hill's small shops mostly open about 10:00–17:00, with shorter hours on Sundays.</li>
   <li>Book Friday and Saturday dinners ahead, especially uphill.</li></ul></div>
  <div class="sec"><h2>⚠️ Before you go</h2><ul>
   <li>Independent places change often. Check each venue's own site or socials before a special trip.</li>
   <li>Map pins come from OpenStreetMap and are close but not exact; use the Directions buttons for door-to-door routes.</li>
   <li>Information was checked in November 2026. The illustrations are original artwork drawn for this guide.</li></ul>
   <button class="btn b-map" id="installAgain" style="width:100%;margin-top:8px">📲 Install this guide on your phone</button></div>
  <div class="sec"><h2>🔄 Updates</h2><p>The guide checks for new content whenever you're online. If something looks out of date, tap below to clear the saved copy and reload.</p>
  <button class="iconbtn" id="refreshBtn" style="padding:10px 14px;box-shadow:0 1px 5px rgba(0,0,0,.2)">Refresh guide</button></div>`;
}
