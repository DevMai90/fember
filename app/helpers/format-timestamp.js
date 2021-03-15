import { helper } from '@ember/component/helper';
import { dateToString } from 'shlack/utils/date';

export default helper(function formatTimestamp(params/*, hash*/) {
  // Destructure array element and give it a name. It goes by position!
  const [dateIsh] = params;
  
  return dateToString(dateIsh);
});
