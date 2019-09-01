<template>
<div>
	<b-card>
		<b-row no-gutters>
			<b-col md="1">
				<b-button class="btn-sm" variant="info">{{name}}</b-button>
				<b-badge variant="light">{{commentObj.created_at}}</b-badge>
			</b-col>
			<b-col md="9">
				<b-card-body>
					<b-card-text>
						{{commentObj.context}}
					</b-card-text>
				</b-card-body>
			</b-col>
			<b-col md="2">
				<b-button class="btn-sm">수정</b-button>
				<b-button class="btn-sm">삭제</b-button>
				<b-button class="btn-sm" @click="subCommentToggle">댓글</b-button>
			</b-col>
		</b-row>
		<template v-if="subCommentCreateToggle">
			<CommentCreate :isSubComment="true" :commentId="commentObj.comment_id" :reloadSubComments="reloadSubComments" :subCommentToggle="subCommentToggle"/>
		</template>
		<div style="margin-bottom: 5px"></div>
		<template v-if="subCommentList.length > 0">
			<div
				:key="item.subComment_id"
				 v-for="item in subCommentList">
				<b-card>
					<b-row no-gutters>
						<b-col md="1">
							<b-button class="btn-sm" variant="info">{{item.user_name}}</b-button>
							<b-badge variant="light">{{item.created_at}}</b-badge>
						</b-col>
						<b-col md="9">
							<b-card-body>
								<b-card-text>
									{{item.context}}
								</b-card-text>
							</b-card-body>
						</b-col>
						<b-col md="2">
							<b-button class="btn-sm">수정</b-button>
							<b-button class="btn-sm">삭제</b-button>
						</b-col>
					</b-row>
				</b-card>				
			</div>
		</template>
	</b-card>
</div>
</template>

<script>
import data from '@/data';
import CommentCreate from './CommentCreate';
	
	
export default{
	name: "CommentListItem",
	props: {
		commentObj: Object,
	},
	components: {
		CommentCreate	
	},
	data() {
		return {
			name: data.User.filter(
				item => item.user_id === this.commentObj.user_id
			)[0].name,
			subCommentList: data.SubComment.filter(
				item => item.comment_id === this.commentObj.comment_id
			).map(subCommentItem => ({
				...subCommentItem,
				user_name: data.User.filter(
					item => item.user_id == subCommentItem.user_id
				)[0].name
			})),
			subCommentCreateToggle: false,
		}	
	},
	methods: {
		subCommentToggle() {
			this.subCommentCreateToggle = ! this.subCommentCreateToggle;
		},
		reloadSubComments() {
			this.subCommentList = data.SubComment.filter(
				item => item.comment_id === this.commentObj.comment_id
			).map(subCommentItem => ({
				...subCommentItem,
				user_name: data.User.filter(
					item => item.user_id == subCommentItem.user_id
				)[0].name
			}));
		}
	}
}
</script>