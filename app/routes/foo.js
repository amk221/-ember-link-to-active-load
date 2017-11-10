import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log('foo', params.fooId);
    return new Ember.RSVP.Promise(resolve => {
      return Ember.run.later(resolve, 1000);
    });
  }
});
