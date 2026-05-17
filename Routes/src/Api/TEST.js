let x = 10;

function fn() {
  console.log('🚀 ~ x:', x);
  return () => {
    let x = 20;
    console.log('🚀 ~ x:', x);
  };
}
fn()();
