import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import AuthService from 'shlack/services/auth';

export default class LoginFormComponent extends Component {
  @tracked
  userId = null;

  /**
   * @type {AuthService}
   */
  @service auth; // Usable as this.auth

  get isDisabled() {
    return !this.userId;
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
    this.auth.loginWithUserId(val); // Using this.auth service and whichever methods are on there.
  }
}
