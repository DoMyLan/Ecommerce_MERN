// https://apac.danielwellington.com/products/classic-mesh-onyx-black-silver
const products = [
    {
      name: 'Sạc nhanh 20W Apple MHJE3ZA',
      image: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/g/r/group_117_1.png',
      description: 'Củ sạc nhanh Apple iPhone 20W Type-C PD MHJE3ZA chính hãng được thiết kế siêu nhỏ gọn, tinh tế giúp bạn có thể mang đến bất cứ nơi đâu. Chất liệu cao cấp cùng màu trắng nổi bật mang đến sự sang trọng và độ bền bỉ cùng với thời gian.',
      brand: 'Apple',
      category: 'SAC',
      price: 10000,
      countInStock: 10,
      rating: 4.5,
      numReviews: 12,
    },
    {
      name: 'Airpods Pro 2 2023',
      image: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/a/p/apple-airpods-pro-2-usb-c_8_.png',
      description:
      'Airpods Pro 2 Type-C với công nghệ khử tiếng ồn chủ động mang lại khả năng khử ồn lên gấp 2 lần mang lại trải nghiệm nghe - gọi và trải nghiệm âm nhạc ấn tượng. Cùng với đó, điện thoại còn được trang bị công nghệ âm thanh không gian giúp trải nghiệm âm nhạc thêm phần sống động. Airpods Pro 2 Type-C với cổng sạc Type C tiện lợi cùng viên pin mang lại thời gian trải nghiệm lên đến 6 giờ tiện lợi.',      brand: 'ZARA',
      brand: 'Apple',
      category: 'Aripods',
      price: 599.99,
      countInStock: 7,
      rating: 4.0,
      numReviews: 8,
    },
    {
      name: 'Airpods 2',
      image: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/g/r/group_169_2.png',
      description:
      `Về cơ bản tai nghe bluetooth Apple AirPods 2 vẫn sở hữu thiết kế thời trang và nhỏ gọn, trọng lượng 4g cũng rất nhẹ không khác mấy so với tai nghe AirPods thế hệ đầu tiên. Nó cũng vẫn giữ nguyên thiết kế với màu trắng đặc trưng cho các dòng tai nghe. Đây là tai nghe wireless 100% và có khả năng tích hợp với mọi thiết bị Apple khác nhau nên bạn có thể linh hoạt sử dụng.`,
      brand: 'Apple',
      category: 'Aripods',
      price: 729.99,
      countInStock: 5,
      rating: 3,
      numReviews: 12,
    },
    {
      name: 'AirPods Pro 2022',
      image: 'https://cdn2.cellphones.com.vn/insecure/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_111_5_.png',
      description:
        'Sau thế hệ AirPods Pro được ra mắt năm 2021, Apple tiếp tục cho ra mắt phiên bản tai nghe không dây mới trong sự kiện ra mắt iPhone 14 series mang tên Apple AirPods Pro thế hệ thứ 2. Tuy Apple AirPods Pro 2 không có quá nhiều đổi mới trong thiết kế nhưng cấu hình cùng chất âm trên thiết bị sẽ được cải thiện đáng kể.',
      brand: 'Apple',
      category: 'Aripods',
      price: 399.99,
      countInStock: 11,
      rating: 5,
      numReviews: 12,
    },
    {
      name: 'Pencil 2023 USB-C',
      image: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/a/p/apple-pencil-usb-c-3.png',
      description:
        'Apple Pencil USB-C được thiết kế để tương thích mượt mà với hầu hết các mẫu iPad hiện nay như: iPad Pro, iPad Air, iPad mini thông qua cổng USB-C tích hợp. Bên cạnh đó, dòng Apple Pencil mới này còn sở hữu độ chính xác tuyệt vời và độ nhạy cao, đem tới sự dễ dàng trong các thao tác như viết, vẽ. Đặc biệt, bút cũng được tích hợp tính năng di chuyển chuột trên các phiên bản iPad Pro dùng chip M2, mang lại sự tiện lợi và độ chính xác cho các tác vụ sáng tạo.',
      brand: 'Apple',
      category: 'Pen',
      price: 49.99,
      countInStock: 7,
      rating: 3.5,
      numReviews: 10,
    },
    {
      name: 'Pencil 1 2022',
      image: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/t/_/t_i_xu_ng_14__1_5.png',
      description:
        'Bút Apple Pencil 1 2022 ghi điểm với thiết kế nhỏ gọn, mang đến trải nghiệm thoải mái khi cầm nắm. Bên cạnh đó sự tiện lợi còn được tối ưu hóa khi sản phẩm tích hợp cảm biến thông minh với độ trễ phản hồi gần như bằng không. Chắc chắn dòng bút cảm ứng sẽ là người bạn đồng hành tuyệt vời với mọi thế hệ iPad.',
      brand: 'Apple',
      category: 'Pen',
      price: 29.99,
      countInStock: 0,
      rating: 4,
      numReviews: 12,
    },
    {
      name: 'Apple Magic Mouse 2021 White',
      image: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/g/r/group_145_2.png',
      description:
        'Magic Mouse 2021 MK2E3 có thiết kế hiện đại với đường cong uyển chuyển tinh tế, thuộc loại chuột bluetooth không dây đáng sử dụng, mặt trên có logo Apple ẩn hiện sang trọng. Thiết kế phần chân tối ưu, trọng lượng siêu nhẹ chỉ 0.099kg giúp di chuyển dễ dàng nhanh chóng.',
      brand: 'Apple',
      category: 'Mouse',
      price: 29.99,
      countInStock: 0,
      rating: 4,
      numReviews: 12,
    },
    {
      name: 'Apple Magic Mouse 2022 Black',
      image: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/t/_/t_i_xu_ng_61__1.png',
      description:
        'Apple Magic Mouse 2 mang trong mình một thiết kế bằng kim loại phần khung và thân chuột, giúp chúng có một độ sang trọng và cao cấp nhất định. Cùng với đó, phần thao tác bằng nhựa cao cấp, bền bỉ ở bên trên giúp cho bạn có thể có được những thao tác gọn nhẹ, linh hoạt và thoải mái nhất có thể. Thiết kế này của chuột Magic Mouse 2 giúp đồng bộ và hài hoà khi bạn sử dụng với thiết bị Apple.',
      brand: 'Apple',
      category: 'Mouse',
      price: 29.99,
      countInStock: 0,
      rating: 4,
      numReviews: 12,
    },
    {
      name: 'Apple Magic Keyboard 2021 MK2A3',
      image: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/b/a/ban-phim-apple-magic-keyboard-2021.png',
      description:
        'Sản phẩm bàn phím Apple Magic Keyboard 2021 MK2A3 đến từ thương hiệu chính hãng Apple, sở hữu thiết kế hiện đại, nhỏ gọn nhưng vẫn được cung cấp đầy đủ các phím chức năng phổ biến',
      brand: 'Apple',
      category: 'Keyboard',
      price: 29.99,
      countInStock: 0,
      rating: 4,
      numReviews: 12,
    },
    
  ];
  
  export default products;
  