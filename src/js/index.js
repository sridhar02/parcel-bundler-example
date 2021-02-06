import '../scss/main.scss';
import func from './fun';
import { camelCase} from "lodash"

func();

if (module.hot) {
  module.hot.accept();
}
