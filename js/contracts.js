document.getElementById('approve').onclick = () => {
   async function Database() {
      var account = document.getElementById('wallet1').value
      var update1 = document.getElementById('wallet2').value

      SIMPLEWALLET.methods
         .withdrawMoney(account, update1)
         .send({ from: account })
      //   console.log(update1)
      //   alert('update1' + update1)
   }
   Database()
}
