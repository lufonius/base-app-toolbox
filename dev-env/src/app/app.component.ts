import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public navItems = [
    {
      id: "1",
      route: "",
      level: 1,
      title: "first",
      subtitle: "firstsubtitle",
      parentId: null,
      childrenIds: [ "3", "5" ],
      children: [
        {
          id: "3",
          route: "",
          level: 2,
          title: "third",
          subtitle: "thirdsubtitle",
          parentId: "1",
          childrenIds: [ "4" ],
          children: [
            {
              id: "4",
              route: "",
              level: 3,
              title: "fourth",
              subtitle: "fourthsubtitle",
              parentId: "3",
              childrenIds: [],
              children: [],
              parent: {
                id: "3",
                route: "",
                level: 2,
                title: "third",
                subtitle: "thirdsubtitle",
                parentId: "1",
                childrenIds: [ "4" ],
                parent: null,
                children: null
              }
            }
          ],
          parent: {
            id: "1",
            route: "",
            level: 1,
            title: "first",
            subtitle: "firstsubtitle",
            parentId: null,
            childrenIds: [ "3", "5" ],
            parent: null,
            children: null
          }
        },
        {
          id: "5",
          route: "",
          level: 2,
          title: "fifth",
          subtitle: "fifthsubtitle",
          parentId: "1",
          childrenIds: [],
          children: [],
          parent: {
            id: "1",
            route: "",
            level: 1,
            title: "first",
            subtitle: "firstsubtitle",
            parentId: null,
            childrenIds: [ "3", "5" ],
            parent: null,
            children: null
          }
        }
      ]
    },
    {
      id: "2",
      route: "",
      level: 1,
      title: "second",
      subtitle: "secondsubtitle",
      parentId: null,
      childrenIds: [ "6" ],
      children: [
        {
          id: "6",
          route: "",
          level: 2,
          title: "sixth",
          subtitle: "sixthsubtitle",
          parentId: "2",
          childrenIds: [],
          parent: {
            id: "2",
            route: "",
            level: 1,
            title: "second",
            subtitle: "secondsubtitle",
            parentId: null
          }
        }
      ]
    }
  ];
}
