# My first landing

## Шрифты

### Иконочные шрифты:
- Font-Awesome.
### Шрифты для текста:
- Dosis Light
- Dosis Regular
- OpenSans Light
- OpenSans Regular

## Стфндартные классы

- **container** (выставляет секцию посредине заданной ширины -> css line 149)
- **container-fluid** (выставляет секцию посредине, на всю ширину -> css line 156)
- **default-section** (задает каждой секции стандартые паддинги -> css line 195)
- **row** (задает каждой секции стандартые марджины -> css line 163)
- **btn** (задает стандартную форму и размер кнопки -> css line 101)
- **btn-default** (задает стандартные цвета и паддинги кнопки -> css line 110)
- **text-center*** (выставляет текст посредине -> css line 191)

## Описание

**About-section** - делим на 3 колонки, с помощью классов _.col_ и _.col-3_. Для img есть hover еффект (css -> line 242). Так же применяется `filter: grayscale(100%);`.

**Service-section** - в этой секции создали `id="services-tabs"`, которые отвечает за работу табов. Табы, с помощью .col-5 разделили на 5 колонок. Работа табов осуществляется с помощью ***script.js***.

**Portfolio** - в этой секции также имеются табы, и для них создан `id="portfolio-tabs"`

**Choose-section** - с помощью _.col_, _.col-3_ разделили секцию на колонки. В качестве иконок, использовали иконочный шрифт Font-Awesome.

**Sliders-section** - для работы слайдов использовали библиотеку ***slick***. Работа слайдов, также осуществляется с помощью javaScript.

**Subscribe-section** - в этой секции создали форму `subscribe-form`, в которой есть поле для ввода e-mail и кнопка отправки `Subscribe`.

**Contact-section** - в этой секции есть контактная информация об организации, которая поделена с помощью _col_ и _col-3_ на 3 колонки и так же применен иконочный шрифт, для иконок. Так же есть контактная форма `contact-form` в которой есть поле для ввода имени, e-mail, сообщения и кнопка отправки.

**Map-section** - в эту секцию вставлен `<iframe>` google maps, при наведении на который, он активируется и увеличивается.

**Footer** - в футере, с помощью _ul -> li_ показаны социальные сети организации, к которым применены _col-5_, а так же, с помощью Font-Awesome, сделаны иконки соц.сетей.

## Медиа запросы

**При таких медиа запросах меняются стили:**

1. `@media (max-width: 1280px)`
2. `@media (max-width: 768px)`
3. `@media (max-width: 732px)`
4. `@media (max-width: 425px)`
5. `@media (max-width: 385px)`
