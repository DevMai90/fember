import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginFormComponent extends Component {
  @tracked
  userId = null;

  get isDisabled() {
    return !this.userId;
  }
  
  loginAsUserWithId(val) {
    console.log('UserId: ', val);
  }

  /**
   * 
   * @param {Event & { target: HTMLSelectElement }} evt
   */
  @action
  onSelectChanged(evt) {
    this.userId = evt.target.value;
  }

  /**
   * @param {Event & { target: HTMLFormElement }} evt
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
