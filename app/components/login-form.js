import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class LoginFormComponent extends Component {
  loginAsUserWithId(val) {
    console.log('UserId: ', val);
  }
  /**
   * @param {Event & {target: HTMLFormElement}} evt
   */
  // We must use action so that the method is bound to the component's this context
  @action // decorator
  onLoginFormSubmit(evt) {
    evt.preventDefault();

    const { target } = evt;
    const val = target.querySelector('select').value;
    
    // Must use @action decorator to bound this to the correct context
    this.loginAsUserWithId(val);
  }
}
