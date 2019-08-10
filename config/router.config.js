export default [
	// {
	// 	path: '/',
	// 	component: './index',
	// },
	{
		path: '/', // 登录
		component: '../layouts/index',
		routes: [
			{ path: '/', component: './index' },
			{ path: '/ok', component: './Ok' },
			// { path: '/data', component: './Login/Data' },
			// { path: '/result', component: './Login/Result' },
		]
	}
]
