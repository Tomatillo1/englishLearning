<script lang="ts">
	function getAllMyQuestions(): number[] {
		let allMyNumber: number[] = [];
		let questionNumber
		do {
			questionNumber = Math.floor(Math.random() * 20) + 1
			if (allMyNumber.includes(questionNumber) === false) {
				allMyNumber.push(questionNumber);
			}
		} while (allMyNumber.length < 10 )
		return allMyNumber;
	}
	getAllMyQuestions()
	console.log(getAllMyQuestions());
</script>