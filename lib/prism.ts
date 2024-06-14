// plugins/prism.ts
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // Hoặc sử dụng chủ đề khác như 'prism-okaidia.css'

// Tải các ngôn ngữ cần thiết, ví dụ:
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
// Thêm các ngôn ngữ khác nếu cần

export default (_context: any, inject: any) => {
  inject('prism', Prism);
};
