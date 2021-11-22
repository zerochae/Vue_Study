<template>
  <div class="discount">
    <h4> 빨리 결제 하셈 {{discountRate}} % 할인함 ㅋㅋ</h4>
  </div>
</template>

<script>
export default {
    name : 'Discount',
    props : {
      discountRate : Number
    }
}
</script>

<style>

</style>