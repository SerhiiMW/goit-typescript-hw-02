/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface T {
  T: string;
}

class Component {
  constructor (public props: T) {

  }
}

class Page extends Component {
  pageInfo () {
    console.log(this.props.T);
  }
}

export {};