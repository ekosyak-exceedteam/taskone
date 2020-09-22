// let input = document.querySelector('.num');
// let result = document.querySelector('.result');
// let errorMessage = document.querySelector('.error-message');
//
// function main (_val) {
//     let newValue = _val
//
//     return {
//         replaceVal: () => {
//             newValue = newValue.replace(/(.)\1+/g, '$1')
//             return this
//         }
//     }
// }
//
// console.log(main('112233').replaceVal().replaceVal().replaceVal().replaceVal())
//
// // function main(val) {
// //     let newValue = val;
// //
// //     return {
// //         setValue: function(_value) {
// //             this.newValue = _value
// //         },
// //         getValue: function () {
// //             return main()
// //         },
// //         replaceString: function() {
// //             this.newValue = this.newValue.replace(/(.)\1+/g, '$1')
// //         }
// //     }
// //
// // }
//
// // class Singleton {
// //
// //     value;
// //
// //     change(value) {
// //         this.value = value
// //     }
// //
// //     replace() {
// //         return this.value.replace(/(.)\1+/g, '$1')
// //     }
// //
// //     print(elemPrint) {
// //         return elemPrint
// //     }
// //
// // }
//
// // const form = new Singleton()
//
// // document.querySelector('.result-btn').onclick = function() {
// //     if (input.value === '') {
// //         input.classList.add('error')
// //         errorMessage.classList.add('error-message-visible')
// //     } else {
// //         result.innerHTML = form.print(form.replace())
// //     }
// // }
// //
// // input.oninput = function () {
// //     if (this.value != '') {
// //         this.classList.remove('error')
// //         errorMessage.classList.remove('error-message-visible')
// //         form.change(document.querySelector('.num').value)
// //     }
// // };
