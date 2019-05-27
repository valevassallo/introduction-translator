function translate(language = en, name, age) {
  switch (language) {
    case "en":
      const en = `Hi! I am ${name} and I'm ${age} years old.`;
      console.log(en);
      break;
    case "es":
      const es = `Hola! Yo soy ${name} y tengo ${age} años.`;
      console.log(es);
      break;
    case "fr":
      const fr = `Bonjour! Je suis ${name} et j'ai ${age} ans.`;
      console.log(fr);
      break;
    case "de":
      const de = `Hallo! Ich bin ${name} und bin ${age} Jahre alt.`;
      console.log(de);
      break;
    case "kr":
      const kr = `Annyeong! ${name} ibnida. Jeoneun ${age} seibnida`;
      console.log(kr);
      break;
    case "ch":
      const ch = `Wǒ shì ${name}, wǒ jīnnián ${age} suì.`;
      console.log(ch);
  }
}

export default translate;
