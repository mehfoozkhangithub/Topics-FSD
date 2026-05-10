/* let date = new Date();

console.log(`🚀 ~ date:before`, date);

date.setTime(date.getTime() + 60 * 1000);

const expire = date.toUTCString();
console.log(`🚀 ~ date:after`, date);

console.log(`🚀 ~ expire:`, expire);
 
*/

/* 
1s => 1000ms
1m => 60 * 1000
1h => 60 * 60 * 1000
24 => 24 * 60 * 60 * 1000
7 => 7 * 24 * 60 * 60 * 1000 
*/

// utc => universal time cordinated
// gmt => greenwich mean time
// ist => India standerd time

/* document.cookie = `netflixToken = mehfooz; expires=${expire}`;
document.cookie = ` amazonToken=abc; expires=${expire}`;
 */

function name() {
  let name = 'mehfooz';

  return () => {
    let name = 'khan';

    console.log(name);
  };
}

name()();
