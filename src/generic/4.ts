/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface obj {
  title: string;
}

class Component {
  constructor(public props: obj) {}
}

class Page extends Component {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
