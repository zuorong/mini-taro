import request from '../api/http'
export class HomeService {
    queryList() {
      const url = 'index.php'
      return request.get(url)
    }
}