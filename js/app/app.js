angular
  .module('app', [
    'ui.router',
    'ngSanitize'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/top.html',
        controller: 'TopPostsController as top',
        resolve: {
          posts: function (PostsService) {
            return PostsService.getTopPosts();
          }
        }
      })

      .state('post', {
        url: '/post/:id',
        templateUrl: 'views/post.html',
        controller: 'PostController as post',
        resolve: {
          post: function (PostsService, $stateParams) {
            return PostsService.getPost($stateParams.id);
          }
        }
      });
  })