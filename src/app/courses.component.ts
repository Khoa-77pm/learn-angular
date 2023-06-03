import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { EmailService } from './email.service';

@Component({
  selector: 'courses',
  template: `
  {{course | summary:10:true }}
`,
})
export class Courses {
  course = "Căn cứ chiến đấu Cà Lu là một căn cứ của Thủy quân lục chiến Hoa Kỳ nằm trên tuyến Quốc lộ 9, gần Krông Klang, huyện Đakrông, phía tây tỉnh Quảng Trị, miền Nam Việt Nam. Ca Lu là bến cuối phía tây của Quốc lộ 9 cho Thủy quân Lục chiến Hoa Kỳ kể từ khi con đường bị cắt giữa đó và Căn cứ Chiến đấu Khe Sanh."
}
