import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import fetch from 'fetch';

export default class ChatContainerComponent extends Component {
  @tracked
  messages = [];

  @action
  async loadMessages() {
    // In order to use a named argument passed into the component, we have to use this.args
    const { channel: { id, teamId } } = this.args; // Here, @channel was passed into the component

    const response = await fetch(`/api/teams/${teamId}/channels/${id}/messages`);

    // We need to replace the messages array. Its contents are not being "tracked"
    // So we use existing messages and then new ones. We put these into a new array.
    // this.messages = [
    //   ...this.messages,
    //   ...(await response.json())
    // ];

    // Don't push. Must make an assignment. Tracking system needs to see that a change has been made.
    this.messages = await response.json();
  }
}
