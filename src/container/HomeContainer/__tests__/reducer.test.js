import reducer from '../reducer';

import {
	FETCH_LIST_SUCCESS,
	LIST_IS_LOADING,
} from '../constants';
describe('list reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			list: [],
			isLoading: true,
		});
	});

	it('should handle FETCH_LIST_SUCCESS', () => {
		expect(
			reducer([], {
				type: FETCH_LIST_SUCCESS,
				list: [
					{
						'login': 'mojombo',
						'id': 1,
						'avatar_url': 'https://avatars0.githubusercontent.com/u/1?v=4',
						'gravatar_id': '',
						'url': 'https://api.github.com/users/mojombo',
						'html_url': 'https://github.com/mojombo',
						'followers_url': 'https://api.github.com/users/mojombo/followers',
						'following_url': 'https://api.github.com/users/mojombo/following{/other_user}',
						'gists_url': 'https://api.github.com/users/mojombo/gists{/gist_id}',
						'starred_url': 'https://api.github.com/users/mojombo/starred{/owner}{/repo}',
						'subscriptions_url': 'https://api.github.com/users/mojombo/subscriptions',
						'organizations_url': 'https://api.github.com/users/mojombo/orgs',
						'repos_url': 'https://api.github.com/users/mojombo/repos',
						'events_url': 'https://api.github.com/users/mojombo/events{/privacy}',
						'received_events_url': 'https://api.github.com/users/mojombo/received_events',
						'type': 'User',
						'site_admin': false
					}
				],
			})
		).toEqual({
			list: [
				{
					'login': 'mojombo',
					'id': 1,
					'avatar_url': 'https://avatars0.githubusercontent.com/u/1?v=4',
					'gravatar_id': '',
					'url': 'https://api.github.com/users/mojombo',
					'html_url': 'https://github.com/mojombo',
					'followers_url': 'https://api.github.com/users/mojombo/followers',
					'following_url': 'https://api.github.com/users/mojombo/following{/other_user}',
					'gists_url': 'https://api.github.com/users/mojombo/gists{/gist_id}',
					'starred_url': 'https://api.github.com/users/mojombo/starred{/owner}{/repo}',
					'subscriptions_url': 'https://api.github.com/users/mojombo/subscriptions',
					'organizations_url': 'https://api.github.com/users/mojombo/orgs',
					'repos_url': 'https://api.github.com/users/mojombo/repos',
					'events_url': 'https://api.github.com/users/mojombo/events{/privacy}',
					'received_events_url': 'https://api.github.com/users/mojombo/received_events',
					'type': 'User',
					'site_admin': false
				}
			],
		});
	});
	it('should handle LIST_IS_LOADING', () => {
		expect(
			reducer([], {
				type: LIST_IS_LOADING,
				isLoading: false,
			})
		).toEqual({
			isLoading: false,
		});
	});
});
