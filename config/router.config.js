export default [
	// {
	// 	path: '/',
	// 	component: './index',
	// },
	{
		path: '/', // 登录
		component: '../layouts/Index',
		routes: [
			{ path: '/', component: './home/Home' },
			{ path: '/production', component: './production/Production' },
			{ path: '/solution', component: './solution/Solution' },
			{ path: '/case', component: './caseStudy/Case' },
			{ path: '/service', component: './service/Service' },
			{ path: '/news', component: './news/News' },
			{ path: '/about', component: './about/About' },
		]
	}
]
