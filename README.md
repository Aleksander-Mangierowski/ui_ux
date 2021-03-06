# UI & UX

Представим, что у нас есть приложение, которое позволяет управлять персоналом в больнице. Больница настолько демократична, что позволяет своим сотрудникам самим выставлять время, в которое они доступны для работы. Хочешь - работай сутки подряд или наоборот только два часа.

У нашего заказчика Джона Смита “нет времени объяснять”, однако в таск-трекере висит несколько заданий и звучат они следующим образом:

Создать страницу, на которой сотрудник больницы может выбирать время, в которое он доступен для работы в течение недели (т.е. у нас должно быть какое-то визуальное представление дней недели). График недели всегда повторяется. Выходные могут быть рабочими - ограничений нет. В течение дня смен может быть несколько 11:00-12:00, 2:00 - 5:00

UI должен предусматривать возможность выбора ночной смены (это условное название для периода работы), например, сотрудник может работать с 8 вечера до 4 утра. Суть в том, что выставление в понедельник времени 8:00 - 2:00 достаточно странно, даже если указать AM/PM, ведь выставляется время для одного дня, а не двух сразу. Сотрудникам за 50, поэтому сопутствующие подписи, алерты, сообщения об ошибках и т.д. - особенно важны.

На странице должна быть также информация о данном сотруднике - фото, имя, должность, телефон. Где и как расположить - на ваше усмотрение.
Задание максимально творческое, но не спешите делать сразу очевидное решение, оно приходит первым в 90% случаев, но несет очень много проблем и сложностей в последствии. Пункты 1,2 требуют особого внимания, поскольку вопрос UX стоит особенно остро.

Важно: Использовать иконки Учесть межстрочный интервал и расположение элементов Сделать адекватные margin/padding чтобы не было перекрывающихся элементов или очень близких друг к другу Выбрать цветовую гамму для страницы, но не делать ее пестрой. Продумайте, где уместно добавить цвет. Выбрать с google fonts шрифт Сделать responsive

Плюс в карму, если задание будет выложено на гитхаб странице, codepen или другом ресурсе на ваше усмотрение без необходимости запускать или билдить проект.

Можно использовать JS для анимаций или интерактива, но Bootstrap или ему подобные только для сетки. Я бы хотел посмотреть, как вы без использования фреймворка сделаете хорошую визуализацию.

Сохранять данные не нужно, или создавать приложение. Важна сама страница и концепт работы с выставлением времени.