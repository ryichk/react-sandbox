const Generics = (): void => {

  class Queue<T> {
    private data: Array<T> = [];
    push(item: T) {
      this.data.push(item);
    }
    pop(): T | undefined {
      return this.data.shift();
    }
  }
  const queue = new Queue<number>();
  queue.push(0)

  class Utility {
    reverse<T>(items: T[]): T[] {
      let toreturn = [];
      for (let i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i]);
      }
      return toreturn;
    }
  }
  const sample = [1, 2, 3];
  const u = new Utility();
  console.log(u.reverse(sample));

  const getJSON = <T>(config: {
    url: string,
    headers?: { [key: string]: string },
  }): Promise<T> => {
    const fetchConfig = ({
      method: 'GET',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...(config.headers || {})
    });
    return fetch(config.url, fetchConfig)
             .then<T>(response => response.json());
  }
  type LoadUsersResponse = {
    users: {
      name: string;
      email: string;
    }[];
  }
  function loadUsers() {
    return getJSON<LoadUsersResponse>({ url: 'https://example.com/users' });
  }
  loadUsers();
}

export default Generics;