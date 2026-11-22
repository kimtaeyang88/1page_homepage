// 서비스 안내: 동그란 사진 + 제목 + 설명 (3개)
import Image from "next/image";
import { services } from "@/app/data";

export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">서비스 안내</h2>

        <div className="grid">
          {services.map((service) => (
            <article key={service.title} className="service">
              <Image
                className="service-photo"
                src={service.image}
                alt={service.title}
                width={314}
                height={314}
              />
              <h3 className="service-title">{service.title}</h3>
              <p className="small-text">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
