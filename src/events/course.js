import Navigation from '../RootNavigation';

const events = [
  {
    name: 'core.course.view',
    handler: ({id}) => {
      console.log(`Event core.course.view received with id ${id}!`);
      Navigation.navigate('coursecontext', {screen: 'view', params: {id}});
    },
  },
];

export default events;
