import Service from '@ember/service';
import { inject as service } from '@ember/service';
import Router from '@ember/routing/router';

const AUTH_KEY = 'shlack-userid'

export default class AuthService extends Service {
  /**
   * @type {Router}
   */
  @service router; // Now we can access this service by using this.service

  get currentUserId() {
    return window.localStorage.getItem(AUTH_KEY);
  }

  loginWithUserId(userId) {
    window.localStorage.setItem(AUTH_KEY, userId);

    console.log('Logged in as userId: ', userId)

    this.router.transitionTo('/teams');
  }


}
