export default {
	User: [
		{
			user_id: 1,
			name: "dkel03",
			created_at: "2019-08-26 20:11:11"
		},
		{
			user_id: 2,
			name: "Jay_Kim",
			created_at: "2019-08-26 20:15:49"
		},
		{
			user_id: 3,
			name: "rlawkddud1",
			created_at: "2019-08-26 20:18:23"
		}		
	],
	Content: [
		{
			content_id: 1,
			user_id: 1,
			title: "dkel03 강의 일람표",
			context: "아직 미정입니다.",
			created_at: "2019-01-01 13:11:42",
			updated_at: null
		},
		{
			content_id: 2,
			user_id: 3,
			title: "rlawkddud1 생일",
			context: "화이팅",
			created_at: "2019-01-02 13:11:42",
			updated_at: null
		},
		{
			content_id: 3,
			user_id: 2,
			title: "Jay_Kim의 오프라인 강좌",
			context: "예정사항 없음",
			created_at: "2019-08-03 13:11:42",
			updated_at: null
		}
	],
	Comment: [
		{
			comment_id: 1,
			user_id: 1,
			content_id: 3,
			context: "강좌는 언제 개설되나요?",
			created_at: "2019-01-03 14:01:45",
			updated_at: null
		},
		{
			comment_id: 2,
			user_id: 3,
			content_id: 3,
			context: "무슨 스택을 사용하나요",
			created_at: "2019-01-04 16:01:45",
			updated_at: null
		},
		{
			comment_id: 3,
			user_id: 2,
			content_id: 1,
			context: "강의 잘보고 있습니다 ^^",
			created_at: "2019-01-04 16:01:45",
			updated_at: null
		}
	],
	SubComment: [
		{
			subcomment_id: 1,
			comment_id: 3,
			user_id: 1,
			context: "감사합니다! 열심히 하겠습니다.",
			created_at:  "2019-01-04 17:05:45",
			updated_at: null
		}
	]
}