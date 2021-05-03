import * as React from 'react';

import Enum from '../components/typescript-sandbox/Enum';
import Freshness from '../components/typescript-sandbox/Freshness';
import TypeGuard from '../components/typescript-sandbox/TypeGuard';
import LiteralTypes from '../components/typescript-sandbox/LiteralTypes';
import Readonly from '../components/typescript-sandbox/Readonly';
import Generics from '../components/typescript-sandbox/Generics';
import TypeCompatibility from '../components/typescript-sandbox/TypeCompatibility';
import DiscriminatedUnion from '../components/typescript-sandbox/DiscriminatedUnion';
import IndexSignature from '../components/typescript-sandbox/IndexSignature';
import MovingTypes from '../components/typescript-sandbox/MovingTypes';
import Mixins from '../components/typescript-sandbox/Mixins';

Enum();
Freshness();
TypeGuard();
LiteralTypes();
Readonly();
Generics();
TypeCompatibility();
DiscriminatedUnion();
IndexSignature();
MovingTypes();
Mixins();

const TSSandBox: React.FC = () => {
  return (
    <div>
      <h2>TypeScript SandBox!</h2>
    </div>
  );
}

export default TSSandBox;