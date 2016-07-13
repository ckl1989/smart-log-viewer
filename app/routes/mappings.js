import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
      // var json = {
      //   mappings: [
      //     {
      //       id: 1,
      //       name: "mapping1"
      //     }
      //   ]
      // };
      // var mappingArray = [];
      //
      //   console.log(json);
      // return json;
      var json = Ember.$.getJSON("Mapping111.json");
      var mappings = {
        mappings: [json]
      }

      console.log(json);
      return json;
  }
});
