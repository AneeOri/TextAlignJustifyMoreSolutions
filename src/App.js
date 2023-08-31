import "./styles.css";

export default function App() {
  const justify22 = (text, width) =>
    text
      .match(new RegExp(`\\S.{0,${width - 2}}(?:\\S|$)(?=\\s|$)|^$`, "g"))
      .map(
        (
          line,
          idx,
          arr,
          w = width - line.length,
          l = line.split` `.length - 1,
          i = 0
        ) =>
          line.replace(
            /\s/g,
            () => " " + " ".repeat(arr[idx + 1] && ~~w / l + (i++ < w % l))
          )
      ).join`\n`;

  var justify = function (str, len) {
    return str
      .split(" ")
      .reduce((r, w, i, arr) => {
        let line = r.pop() || [];
        let lineLen = line.reduce(
          (k, v) => k + v.length,
          Math.max(0, line.length)
        );
        if (lineLen + w.length > len) {
          let index = 0;
          while (lineLen++ <= len && line.length > 1) {
            line[index] += " ";
            index = ++index % (line.length - 1);
          }
          r.push(line.join(" "), [w]);
        } else if (i === arr.length - 1) {
          r.push(line.concat(w).join(" "));
        } else {
          r.push(line.concat(w));
        }
        return r;
      }, [])
      .join("\n");
  };

  function justify59(text, width) {
    let resp = [];
    let i;
    text = text.replace(/\s{2,}/g, " ");
    while (text[width]) {
      i = text.lastIndexOf(" ", width);
      resp.push(i === width ? text.slice(0, i) : norm(text.slice(0, i), i));
      text = text.slice(i + 1);
    }
    resp.push(text);
    function norm(s, i) {
      s = s.split(" ");
      if (s.length === 1) return s;
      let j = 0;
      for (let y = width - i; y > 0; y--) {
        s[j] = s[j] + " ";
        j === s.length - 2 ? (j = 0) : j++;
      }
      return s.join(" ");
    }
    return resp.join("\n");
  }

  return (
    <div className="App">
      <input />
    </div>
  );
}
