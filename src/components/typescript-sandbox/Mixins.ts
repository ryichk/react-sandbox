const Mixins = (): void => {
  type Constructor<T = {}> = new (...args: any[]) => T;

  function Timestamped<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
      timestamp = Date.now();
    };
  }

  function Activatable<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
      isActivated = false;

      activate() {
        this.isActivated = true;
      }

      deactivate() {
        this.isActivated = false;
      }
    };
  }

  class User {
    name = '';
  }

  const TimestampedUser = Timestamped(User);

  const TimestampedActivatableUser = Timestamped(Activatable(User));

  const timestampedUserExample = new TimestampedUser();
  console.log(timestampedUserExample.timestamp);

  const timestampedActivatableUserExample = new TimestampedActivatableUser();
  console.log(timestampedActivatableUserExample.timestamp);
  timestampedActivatableUserExample.activate();
  console.log(timestampedActivatableUserExample.isActivated);
}

export default Mixins;