<template>
	<div>
		<b-card no-body>
			<h5 slot="header">{{title}}</h5>
			<b-card-body>
				<b-card-sub-title class="mb-2">
					글번호: {{contentId}} | 작성자: {{user}} | 작성일: {{created}}
				</b-card-sub-title>

				<b-card-text>
					{{context}}
				</b-card-text>
			</b-card-body>

			<b-card-body>
				<div class="btn btn-sm btn-success" @click="updateData">수정</div>
				<div class="btn btn-sm btn-danger" @click="deleteData">삭제</div>
			</b-card-body>
			
			
			<b-card-footer>
				<b-card-title class="mb-2">댓글</b-card-title>
				<CommentList :contentId="contentId"/> 
			</b-card-footer>
		</b-card>
	</div>
</template>
<script>
import data from '@/data';
import CommentList from './CommentList';
export default {
	name: "ContentDetail",
	components: {
		CommentList	
	},
	data() {
		const contentId = Number(this.$route.params.contentId);
	//	const contentId = 1;
		const contentData = data.Content.filter(item => item.content_id === contentId)[0]
    return {
      contentId: contentId,
      title: contentData.title,
      context: contentData.context,
      user: data.User.filter(item => item.user_id === contentData.user_id)[0]
        .name,
      created: contentData.created_at
    };
  },
  methods: {
    deleteData() {
      const content_index = data.Content.findIndex(item => item.content_id === this.contentId);
      data.Content.splice(content_index, 1)
      this.$router.push({
        path: '/board/free'
      })
    },
    updateData() {
      this.$router.push({
        path: `/board/free/create/${this.contentId}`
      })
    }
  }
}
	
</script>